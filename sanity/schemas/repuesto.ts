import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'repuesto',
    title: 'Repuestos',
    type: 'document',
    fields: [
        defineField({
            name: 'nombre',
            title: 'Nombre del Repuesto',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'nombre',
                maxLength: 96,
            },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'sku',
            title: 'SKU / Código',
            type: 'string',
        }),
        defineField({
            name: 'descripcion',
            title: 'Descripción',
            type: 'text',
            rows: 4
        }),
        defineField({
            name: 'precio',
            title: 'Precio',
            type: 'number',
            validation: Rule => Rule.required().positive()
        }),
        defineField({
            name: 'imagenes',
            title: 'Imágenes',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            options: {
                layout: 'grid'
            }
        }),
        defineField({
            name: 'categoria',
            title: 'Categoría',
            type: 'reference',
            to: [{ type: 'categoria' }]
        }),
        defineField({
            name: 'marcasCompatibles',
            title: 'Marcas Compatibles',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }),
        defineField({
            name: 'modelosCompatibles',
            title: 'Modelos Compatibles',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        }),
        defineField({
            name: 'aniosCompatibles',
            title: 'Años Compatibles',
            type: 'string',
            description: 'Ej: 2015-2020'
        }),
        defineField({
            name: 'stock',
            title: 'Stock Disponible',
            type: 'number',
            initialValue: 0
        }),
        defineField({
            name: 'estado',
            title: 'Estado',
            type: 'string',
            options: {
                list: [
                    { title: 'Nuevo', value: 'nuevo' },
                    { title: 'Usado', value: 'usado' },
                    { title: 'Remanufacturado', value: 'remanufacturado' }
                ]
            }
        }),
        defineField({
            name: 'destacado',
            title: 'Producto Destacado',
            type: 'boolean',
            initialValue: false
        }),
    ],
    preview: {
        select: {
            title: 'nombre',
            media: 'imagenes.0',
            precio: 'precio',
            stock: 'stock'
        },
        prepare(selection) {
            const { title, media, precio, stock } = selection
            return {
                title: title,
                subtitle: `$${precio} - Stock: ${stock}`,
                media: media
            }
        }
    }
})