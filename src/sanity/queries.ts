import { client } from './client';

export async function getBlogPosts() {
  return client.fetch(`*[_type == "blogPost"] | order(publishDate desc) {
    title,
    "slug": slug.current,
    eyebrow,
    publishDate,
    readTime,
    body,
    authorName,
    authorBio
  }`);
}

export async function getBlogPost(slug: string) {
  return client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      eyebrow,
      publishDate,
      readTime,
      body,
      authorName,
      authorBio,
      ctaLabel,
      ctaTitle,
      ctaBody
    }`,
    { slug }
  );
}

export async function getCaseStudies() {
  return client.fetch(`*[_type == "caseStudy"] | order(order asc) {
    title,
    industry,
    badgeText,
    badgeColor,
    summary,
    results,
    problem,
    solution,
    order
  }`);
}

export async function getProjects() {
  return client.fetch(`*[_type == "project" && featured == true] | order(order asc) {
    title,
    badgeText,
    badgeColor,
    status,
    shortDescription,
    problem,
    tags,
    detailSections,
    workflow,
    "screenshots": screenshots[].asset->url,
    demoUrl,
    order
  }`);
}
