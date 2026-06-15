import type { StructureResolver } from 'sanity/structure'
import type { ListBuilder } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems()) as ListBuilder