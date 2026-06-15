'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'
import { structure } from './sanity/structure'
import { ExcelImporter } from './sanity/plugins/excelImporter/ExcelImporter'
import type { ListBuilder, StructureBuilder, StructureResolverContext } from 'sanity/structure'



export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({
      structure: (S: StructureBuilder, context: StructureResolverContext) =>
        S.list()
          .title('Contenido')
          .items([
            S.listItem()
              .title('📥 Importar desde Excel')
              .id('excel-importer')
              .child(
                S.component(ExcelImporter)
                  .id('excel-importer-component')
                  .title('Importar Productos')
              ),
            S.divider(),
            ...S.documentTypeListItems(),
          ])
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})