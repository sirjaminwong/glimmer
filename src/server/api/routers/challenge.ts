import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const challengeRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.word.findMany();
  }),

  create: publicProcedure.input(z.object({ text: z.string() }))
    .mutation(({ input, ctx }) => {
      return ctx.prisma.challenge.create({
        data: {
          prompt: input.text,
          type: 'translate'
        }
      })
    })
});