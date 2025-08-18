import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'

export default function Podcast() {
  return (
    <>
      <PageSEO
        title={`Podcast - ${siteMetadata.author}`}
        description="Deploying Target at Large Organizations Podcast"
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <p className="text-l font-bold">Deploying Target at Large Organizations</p>
          <p>
            In this Podcast, I am interviewed by Ben and Eddie from Speero about tips and tricks for
            deploying Target at large organizations. Recorded in August 2025.
          </p>
          <p className="text-sm italic">Features some minor audio editing</p>
        </div>
        <div className="container py-12">
          <div className="space-y-8">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GQL8wyd9bEk?si=Qkr5hSH5wCD1ft_J"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  )
}
