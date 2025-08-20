import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Target() {
  return (
    <>
      <PageSEO
        title={`Target - ${siteMetadata.author}`}
        description="Sandbox for various target activities"
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1>Target Sandbox</h1>
        </div>
        <div className="container py-12">
          <div className="space-y-8">
            <p>content</p>
          </div>
        </div>
      </div>
    </>
  )
}
