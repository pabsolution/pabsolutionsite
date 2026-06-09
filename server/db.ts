import { eq, desc } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, contactSubmissions, InsertContactSubmission, ContactSubmission, services, InsertService, Service, projects, InsertProject, Project } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// Contact Submissions
export async function createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission | null> {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot create contact submission: database not available");
    return null;
  }

  try {
    const result = await db.insert(contactSubmissions).values(data);
    const id = (result as any).insertId;
    const submission = await db.select().from(contactSubmissions).where(eq(contactSubmissions.id, id)).limit(1);
    return submission.length > 0 ? submission[0] : null;
  } catch (error) {
    console.error("[Database] Failed to create contact submission:", error);
    throw error;
  }
}

export async function getContactSubmissions() {
  const db = await getDb();
  if (!db) return [];
  try {
    return await db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt));
  } catch (error) {
    console.error("[Database] Failed to get contact submissions:", error);
    return [];
  }
}

export async function updateContactSubmissionStatus(id: number, status: string) {
  const db = await getDb();
  if (!db) return null;
  try {
    await db.update(contactSubmissions).set({ status: status as any }).where(eq(contactSubmissions.id, id));
    const result = await db.select().from(contactSubmissions).where(eq(contactSubmissions.id, id)).limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to update contact submission:", error);
    throw error;
  }
}

// Services
export async function createService(data: InsertService): Promise<Service | null> {
  const db = await getDb();
  if (!db) return null;
  try {
    const result = await db.insert(services).values(data);
    const id = (result as any).insertId;
    const service = await db.select().from(services).where(eq(services.id, id)).limit(1);
    return service.length > 0 ? service[0] : null;
  } catch (error) {
    console.error("[Database] Failed to create service:", error);
    throw error;
  }
}

export async function getServices() {
  const db = await getDb();
  if (!db) return [];
  try {
    return await db.select().from(services).orderBy(services.order);
  } catch (error) {
    console.error("[Database] Failed to get services:", error);
    return [];
  }
}

// Projects
export async function createProject(data: InsertProject): Promise<Project | null> {
  const db = await getDb();
  if (!db) return null;
  try {
    const result = await db.insert(projects).values(data);
    const id = (result as any).insertId;
    const project = await db.select().from(projects).where(eq(projects.id, id)).limit(1);
    return project.length > 0 ? project[0] : null;
  } catch (error) {
    console.error("[Database] Failed to create project:", error);
    throw error;
  }
}

export async function getProjects() {
  const db = await getDb();
  if (!db) return [];
  try {
    return await db.select().from(projects).orderBy(projects.order);
  } catch (error) {
    console.error("[Database] Failed to get projects:", error);
    return [];
  }
}

export async function updateProject(id: number, data: Partial<InsertProject>) {
  const db = await getDb();
  if (!db) return null;
  try {
    await db.update(projects).set(data).where(eq(projects.id, id));
    const result = await db.select().from(projects).where(eq(projects.id, id)).limit(1);
    return result.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("[Database] Failed to update project:", error);
    throw error;
  }
}
