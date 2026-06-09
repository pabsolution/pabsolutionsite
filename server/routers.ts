import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { createContactSubmission, getContactSubmissions, updateContactSubmissionStatus, getServices, getProjects, createProject, updateProject } from "./db";
import { z } from "zod";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Contact form submissions
  contact: router({
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        company: z.string().optional(),
        projectDetails: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const submission = await createContactSubmission({
          name: input.name,
          email: input.email,
          company: input.company || null,
          projectDetails: input.projectDetails || null,
        });
        
        // Send notification to owner when new submission arrives
        if (submission) {
          try {
            await notifyOwner({
              title: `New Contact Form Submission from ${input.name}`,
              content: `Email: ${input.email}\nCompany: ${input.company || 'N/A'}\n\nProject Details:\n${input.projectDetails || 'No details provided'}`,
            });
          } catch (error) {
            console.error('Failed to send notification:', error);
          }
        }
        
        return { success: !!submission, id: submission?.id };
      }),
    
    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user?.role !== 'admin') throw new Error('Unauthorized');
      return await getContactSubmissions();
    }),
    
    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(['new', 'read', 'replied']),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') throw new Error('Unauthorized');
        return await updateContactSubmissionStatus(input.id, input.status);
      }),
  }),

  // Services
  services: router({
    list: publicProcedure.query(async () => {
      return await getServices();
    }),
  }),

  // Projects/Portfolio
  projects: router({
    list: publicProcedure.query(async () => {
      return await getProjects();
    }),
    
    create: protectedProcedure
      .input(z.object({
        title: z.string().min(1),
        description: z.string().optional(),
        clientName: z.string().optional(),
        industry: z.string().optional(),
        technologies: z.string().optional(),
        imageUrl: z.string().optional(),
        resultMetrics: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') throw new Error('Unauthorized');
        return await createProject({
          title: input.title,
          description: input.description || null,
          clientName: input.clientName || null,
          industry: input.industry || null,
          technologies: input.technologies || null,
          imageUrl: input.imageUrl || null,
          resultMetrics: input.resultMetrics || null,
        });
      }),
    
    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        description: z.string().optional(),
        clientName: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user?.role !== 'admin') throw new Error('Unauthorized');
        const { id, ...data } = input;
        return await updateProject(id, data);
      }),
  }),
});

export type AppRouter = typeof appRouter;
