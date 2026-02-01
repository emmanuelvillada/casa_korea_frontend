import { type SchemaTypeDefinition } from 'sanity'
import repuesto from '../schemas/repuesto'
import categoria from '../schemas/categoria'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [repuesto, categoria],
}
