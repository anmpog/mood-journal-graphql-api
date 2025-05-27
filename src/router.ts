import { initTRPC } from '@trpc/server'
import { z } from 'zod'
import { prisma } from './prisma'

const t = initTRPC.create()

export const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query((opts) => {
    opts.input
    return { id: opts.input, name: 'Bilbo' }
  }),
  createUser: t.procedure
    .input(
      z.object({
        firstName: z.string(),
        lastName: z.string(),
        email: z.string(),
      })
    )
    .mutation(async (opts) => {
      const { input } = opts

      return await prisma.user.create({
        data: {
          ...input,
        },
      })
    }),
})

export type AppRouter = typeof appRouter
