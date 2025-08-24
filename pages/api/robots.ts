import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const host = req.headers.host || ''
  const isStaging = host.includes('staging') || process.env.VERCEL_ENV === 'preview'

  if (isStaging) {
    // Block all crawlers on staging
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(`User-agent: *
Disallow: /`)
  } else {
    // Allow crawlers on production
    res.setHeader('Content-Type', 'text/plain')
    res.status(200).send(`User-agent: *
Disallow:

Sitemap: https://perpetua.digital/sitemap.xml`)
  }
}
