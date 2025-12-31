import { MetadataRoute } from 'next'
import { getAllProjects } from './data/projects'
import { getAllCertifications } from './data/certifications'

export default function sitemap(): MetadataRoute.Sitemap {
  const projects = getAllProjects()
  const certifications = getAllCertifications()

  const projectUrls = projects.map((project) => ({
    url: `https://rakhmiddin.uz/portfolio/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const certificationUrls = certifications.map((cert) => ({
    url: `https://rakhmiddin.uz/certifications/${cert.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: 'https://rakhmiddin.uz',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://rakhmiddin.uz/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rakhmiddin.uz/portfolio',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://rakhmiddin.uz/certifications',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rakhmiddin.uz/blogs',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://rakhmiddin.uz/cv',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...projectUrls,
    ...certificationUrls,
  ]
}

