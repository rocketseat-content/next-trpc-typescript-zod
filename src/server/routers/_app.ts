import { z } from 'zod';
import { procedure, router } from '../trpc';

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        greeting: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const count = await ctx.prisma.feedback.count()

      return {
        message: `Feedbacks: ${count}`,
      };
    }),

  createFeedback: procedure
    .input(
      z.object({
        type: z.string(),
        content: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      await ctx.prisma.feedback.create({
        data: {
          type: input.type,
          content: input.content,
        }
      })
    })
});

export type AppRouter = typeof appRouter;