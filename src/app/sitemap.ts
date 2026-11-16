import { MetadataRoute } from 'next';

const BASE_URL = 'https://poker.xerafun.com';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: '',
      priority: 1.0,
      changeFrequency: 'daily' as const,
    },
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        en: `${BASE_URL}/`,
        zh: `${BASE_URL}/`,
      },
    },
  }));
}
