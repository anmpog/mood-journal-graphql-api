import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { typeDefs } from './schema.js'
import { resolvers } from './resolvers.js'
import { Context, createContext } from './context.js'

const start = async () => {
  // The ApolloServer constructor requires two parameters: your schema
  // definition and your set of resolvers.
  const server = new ApolloServer<Context>({
    typeDefs,
    resolvers,
  })

  const { url } = await startStandaloneServer(server, {
    context: createContext,
    listen: { port: 4000 },
  })

  console.log(`🚀  Server ready at: ${url}`)
}

start()
