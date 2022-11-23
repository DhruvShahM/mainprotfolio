export default {
    name: 'author',
    type: 'document',
      title: 'Author',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Image'
      },
      {
        name: 'desc',
        type: 'string',
        title: 'About'
      },
    ]
}