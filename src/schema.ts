// api/schema.ts
import { makeSchema } from 'nexus'
import path, { join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const schema = makeSchema({
  types: [], // 1
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'), // 2
    schema: join(__dirname, '..', 'schema.graphql'), // 3
  },
})
