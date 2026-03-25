import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'song',
  title: 'Song',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Song Title',
      type: 'string',
      validation: Rule => 
        Rule.required()
            .min(3)
            .max(30)
            .error("Title must be between 3 and 30 characters.")
     
    }),
    defineField({
      name: 'artist',
      title: 'Artist',
      type: 'string',
      validation: Rule => 
        Rule.required()
            .max(30)
            .error("Description must be less than 30 characters.")
    }),
    defineField({
      name: 'releaseDate',
      title: 'Release Date',
      type: 'date'
    }),
    defineField({
      name: 'audioFile',
      title: 'Song File',
      type: 'file',
      options: {
        accept: 'audio/*'
      }
    })
  ]
})