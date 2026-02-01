import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'categoria',
    title: 'Categorías',
    type: 'document',
    fields: [
        defineField({
            name: 'nombre',
            title: 'Nombre',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'nombre',
            }
        }),
        defineField({
            name: 'descripcion',
            title: 'Descripción',
            type: 'text',
        }),
        defineField({
            name: 'icono',
            title: 'Ícono',
            type: 'image',
        }),
    ]
})