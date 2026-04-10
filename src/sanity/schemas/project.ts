import { defineField, defineType } from 'sanity';

export const project = defineType({
  name: 'project',
  title: 'AI/POC Lab Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'badgeText', title: 'Badge Text', type: 'string' }),
    defineField({ name: 'badgeColor', title: 'Badge Color', type: 'string' }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: { list: ['Fully Operational', 'In Progress'] },
    }),
    defineField({ name: 'shortDescription', title: 'Short Description', type: 'string' }),
    defineField({ name: 'problem', title: 'Problem Statement', type: 'text' }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'detailSections',
      title: 'Detail Sections',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'label', title: 'Label', type: 'string' }),
          defineField({ name: 'body', title: 'Body', type: 'text' }),
        ],
      }],
    }),
    defineField({
      name: 'workflow',
      title: 'Workflow Steps',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'title', title: 'Step Title', type: 'string' }),
          defineField({ name: 'body', title: 'Step Description', type: 'text' }),
        ],
      }],
    }),
    defineField({
      name: 'screenshots',
      title: 'Screenshots',
      type: 'array',
      of: [{ type: 'image' }],
    }),
    defineField({ name: 'demoUrl', title: 'Demo URL', type: 'url' }),
    defineField({ name: 'sandboxUrl', title: 'Sandbox URL', type: 'url' }),
    defineField({ name: 'lastUpdated', title: 'Last Updated', type: 'date' }),
    defineField({ name: 'order', title: 'Display Order', type: 'number' }),
    defineField({ name: 'featured', title: 'Featured', type: 'boolean', initialValue: true }),
  ],
});
