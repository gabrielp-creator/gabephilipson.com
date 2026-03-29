import { defineField, defineType } from 'sanity';

export const blogPost = defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string', initialValue: 'Blog' }),
    defineField({ name: 'publishDate', title: 'Publish Date', type: 'date' }),
    defineField({ name: 'readTime', title: 'Read Time', type: 'string' }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'object',
          name: 'pullQuote',
          title: 'Pull Quote',
          fields: [defineField({ name: 'text', title: 'Quote Text', type: 'string' })],
        },
        {
          type: 'object',
          name: 'statRow',
          title: 'Stat Row',
          fields: [
            defineField({
              name: 'stats',
              title: 'Stats',
              type: 'array',
              of: [{
                type: 'object',
                name: 'stat',
                fields: [
                  defineField({ name: 'number', title: 'Number', type: 'string' }),
                  defineField({ name: 'label', title: 'Label', type: 'string' }),
                ],
              }],
            }),
          ],
        },
      ],
    }),
    defineField({ name: 'authorName', title: 'Author Name', type: 'string', initialValue: 'Gabriel Philipson' }),
    defineField({ name: 'authorBio', title: 'Author Bio', type: 'text' }),
    defineField({ name: 'ctaLabel', title: 'CTA Label', type: 'string' }),
    defineField({ name: 'ctaTitle', title: 'CTA Title', type: 'string' }),
    defineField({ name: 'ctaBody', title: 'CTA Body', type: 'text' }),
  ],
});
