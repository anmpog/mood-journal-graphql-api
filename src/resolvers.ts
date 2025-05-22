export const resolvers = {
  Query: {
    getUsers: () => {
      return {
        firstName: 'Query Anthony',
        lastName: 'Query Pogliano',
        email: 'Query fake@test.com',
      }
    },
  },
  Mutation: {
    createUser: async (_, args, context) => {
      console.log('Args: ', args)
      const user = await context.prisma.user.create({
        data: {
          ...args,
        },
      })

      return user
    },
  },
}
