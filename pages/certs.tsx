import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import Image from 'next/image'

const certifications = [
  {
    title: 'Adobe Certified Professional - Adobe Customer Journey Analytics Business Practitioner',
    description:
      "The Adobe Certified Professional - Adobe Customer Journey Analytics Business Practitioner certification is the industry-recognized validation of one's proficiency in utilizing Adobe Customer Journey Analytics to analyze cross-channel customer data and drive actionable insights.",
    image: '/static/images/professionalbadge.png',
    verificationUrl:
      'https://certification.adobe.com/credential/verify/94f4aedf-1f0d-11f1-be16-42010a400fe2',
  },
  {
    title: 'Adobe Certified Expert - Adobe Target Business Practitioner',
    description:
      "The Adobe Certified Expert - Adobe Target Business Practitioner certification is the industry-recognized validation of one's proficiency in utilizing Adobe Target to create and optimize personalized experiences, run A/B and multivariate tests, and deliver targeted content to the right audiences.",
    image: '/static/images/expertbadge.png',
    verificationUrl:
      'https://certification.adobe.com/credential/verify/102d3172-1210-11f1-be16-42010a400fe2',
  },
  {
    title: 'Adobe Certified Expert - Adobe Real-Time CDP Developer',
    description:
      "The Adobe Certified Expert - Adobe Real-Time CDP Developer certification is the industry-recognized validation of one's proficiency in implementing and managing Adobe Real-Time Customer Data Platform, including building unified customer profiles, configuring destinations, and activating segments across channels.",
    image: '/static/images/expertbadge.png',
    verificationUrl:
      'https://certification.adobe.com/credential/verify/88b06bbf-dd76-11f0-81b9-42010a400fdc',
  },
  {
    title: 'Adobe Certified Expert - Adobe Analytics Developer',
    description:
      "The Adobe Certified Expert - Analytics Developer certification is the industry-recognized validation of one's proficiency in, and successful implementation of Adobe Analytics including Adobe Experience Platform Launch.",
    image: '/static/images/expertbadge.png',
    verificationUrl:
      'https://certification.adobe.com/credential/verify/427b7b31-ee7e-4717-a4d0-0abd5232d7b5',
  },
  {
    title: 'Adobe Certified Master - Adobe Target Architect',
    description:
      "The Adobe Certified Master - Target Architect certification is the industry-recognized validation of one's expertise in architecting, designing and implementing Target, integrating with Adobe solutions, administrating, across supported touchpoints, leveraging recommendations, and troubleshooting Target requests.",
    image: '/static/images/masterbadge.png',
    verificationUrl:
      'https://certification.adobe.com/credential/verify/ac798c84-0026-4f68-b6be-72aba6c4c8e6',
  },
  {
    title: 'Adobe Certified Expert - Adobe Analytics Business Practitioner',
    description:
      "The Adobe Certified Expert - Analytics Business Practitioner certification is the industry-recognized validation of one's proficiency in utilizing Adobe Analytics, helping customers translate their functional requirements and measurements and proposing courses of action based on results.",
    image: '/static/images/expertbadge.png',
    verificationUrl:
      'https://certification.adobe.com/credential/verify/18f60e93-6d52-11f0-9b2a-42010a400fc3',
  },
  {
    title: 'Adobe Certified Expert - Adobe Customer Journey Analytics Developer',
    description:
      "The Adobe Certified Expert - Adobe Customer Journey Analytics Developer certification is the industry-recognized validation of one's expertise in Adobe Customer Journey Analytics. This certification requires in-depth knowledge related to setting up the foundational data for analysis, and your ability to leverage basic AEP data structures and datasets to do so. Further, the candidate can build and validate connections and data views, and configure advanced metrics/dimensions.",
    image: '/static/images/expertbadge.png',
    verificationUrl:
      'https://certification.adobe.com/credential/verify/37338be5-93d3-11f0-8ca0-42010a400fd3',
  },
  {
    title: 'Adobe Certified Expert - Adobe Journey Optimizer Developer',
    description:
      "The Adobe Certified Expert - Adobe Journey Optimizer Developer certification is the industry-recognized validation of one's proficiency in implementing and configuring Adobe Journey Optimizer, including building customer journeys, managing messages across channels, and leveraging decisioning capabilities.",
    image: '/static/images/expertbadge.png',
    verificationUrl:
      'https://certification.adobe.com/credential/verify/c1811122-c2a5-11f0-8ca0-42010a400fd3',
  },
]

export default function Certs() {
  return (
    <>
      <PageSEO
        title={`Certifications - ${siteMetadata.author}`}
        description="Professional certifications and credentials"
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Certifications
          </h1>
        </div>
        <div className="container py-12">
          <div className="space-y-8">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="flex flex-col space-y-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700 md:flex-row md:space-y-0 md:space-x-6"
              >
                <div className="flex-shrink-0">
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={`${cert.title} certification`}
                      width={96}
                      height={96}
                      className="h-24 w-24 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="h-24 w-24 rounded-lg bg-green-500" />
                  )}
                </div>
                <div className="flex flex-grow flex-col justify-center space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {cert.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{cert.description}</p>
                  {cert.verificationUrl && cert.verificationUrl !== '#' && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-fit items-center text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      Verify Certification
                      <svg
                        className="ml-1 h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
