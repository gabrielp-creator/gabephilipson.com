import { defineField, defineType } from 'sanity';

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'industry', title: 'Industry', type: 'string' }),
    defineField({ name: 'badgeText', title: 'Badge Text', type: 'string' }),
    defineField({ name: 'badgeColor', title: 'Badge Color', type: 'string' }),
    defineField({ name: 'summary', title: 'Summary', type: 'text' }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'metric', title: 'Metric', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'string' }),
        ],
      }],
    }),
    defineField({ name: 'problem', title: 'The Problem', type: 'text' }),
    defineField({ name: 'solution', title: 'What Was Built', type: 'text' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
  ],
});
