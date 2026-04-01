import React, { useRef } from 'react'
import Head from 'next/head'

export const metadata = {
  title: `John Simmons - Resume`,
}

const Experience = [
  {
    title: 'Analytics & Experimentation Architect',
    company: 'Further, Inc.',
    startDate: '10/25',
    endDate: 'Present',
    description: `Placeholder description.`,
  },
  {
    title: 'Senior Software Engineer',
    company: 'Marriott Hotels',
    startDate: '9/24',
    endDate: '10/25',
    description: `I serve as a technical and architectural subject matter expert for all Experience Cloud products. 
    Such as: AEP, RTCDP, Launch, Analytics, and Target. 
    Integrating apps to natively read and write to RTCDP profiles for personalization purposes, 
    building a documentation site from scratch to visualize our data layer variables to XDM schemas.
    upgrading various digital properties to the AEP SDKs,
  rearchitecting marketing channel processing rules to better represent conversion channel data on executive dashboards, etc.
  I not only do the technical implementation of these projects, but I drive them from a business perspective as well. 
    I also do trainings and presentations for technical and non-technical people audiences, build proof of concepts, and write documentation.`,
  },
  {
    title: 'Senior Software Engineer',
    company: 'Rocket Money',
    startDate: '8/23',
    endDate: '8/24',
    description: `As a Senior Software Engineer, my primary focus was integrating our website and mobile
app with analytics vendors and services such as Adobe, Amplitude, Segment, Google, and
Singular. This role required expertise in our codebases and technology stack (React Native & GraphQL). In addition to instrumenting data collection with these
tools, I collaborated closely with our Product and Marketing teams to develop website and
app experimentation. Furthermore, I served as an advisor on our data governance committee,
to help ensure data quality and standardization.`,
  },
  {
    title: 'Senior Analytics Engineer',
    company: 'Rocket Mortgage',
    startDate: '8/16',
    endDate: '8/23',
    description: `I served as the subject matter expert for Adobe Experience Cloud products. In addition
to my technical implementation responsibilities, I also worked as an end-to-end project
consultant for the deployment of Adobe Launch, Adobe Analytics, Adobe Target, and the
Adobe Experience Platform from both a technical and strategic perspective. This includes
writing technical documentation for developers, conducting introductory training for product
owners, and building dashboards for analysts.`,
  },
  {
    title: 'User Experience Researcher',
    company: 'Quicken Loans',
    startDate: '5/13',
    endDate: '9/16',
    description: `I provided insights on the relationship between the behavior of our users, our website data,
and the business key performance indicators of Quicken Loans' various web and mobile
applications.`,
  },
]

const Certifications = [
  { product: 'Adobe Analytics', certs: ['Developer', 'Business Practitioner'] },
  { product: 'Adobe Target', certs: ['Architect', 'Business Practitioner'] },
  { product: 'Adobe Customer Journey Analytics', certs: ['Developer', 'Business Practitioner'] },
  { product: 'Adobe Real-Time CDP', certs: ['Developer'] },
  { product: 'Adobe Journey Optimizer', certs: ['Developer'] },
]

const Projects = [
  {
    title: 'Deploying Target at Large Organizations Podcast',
    description:
      'In this Podcast, I am interviewed about tips and tricks for deploying Target at large organizations.',
    url: 'https://perpetua.digital/podcast',
  },
  {
    title: 'Perpetua Digital Launch Assistant',
    description:
      'I am the sole developer of the Perpetua Digital Launch Assistant. The Perpetua Digital Launch Assistant is a tool for Adobe Developers that offers better Searching, Visualization of Data Elements and Rule relationships, and exporting of components in Adobe Launch Properties.',
    url: 'https://assistant.perpetua.digital/',
  },
]

const Education = [
  {
    title: 'Master of Science in Information - Human Computer Interaction',
    institution: 'University of Michigan',
    date: '2013',
  },
  {
    title: 'Bachelor of Science - Digital Imaging',
    institution: 'Western Michigan University',
    date: '2010',
  },
]

const Skills = [
  'Adobe Analytics',
  'Adobe Target',
  'Adobe Launch',
  'Adobe Experience Platform (AEP)',
  'AEP Web SDK',
  'ObservePoint',
  'Testing/QA Automation',
  'Technical Documentation',
  'Cookie Compliance Tools',
  'Confluence',
  'Jira',
  'Agile',
  'Marketing Pixels',
  'Server Side Tracking',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Python',
  'Node.js',
  'Google Tag Manager',
  'Amplitude',
  'Segment',
  'Singular',
  'HTML',
  'CSS',
  'Sass',
  'Tailwind',
  'GraphQL',
  'Git',
  'AWS Lambdas',
  'Serverless Framework',
]
const SectionHeading = ({ title, className = '' }: { title: string; className?: string }) => {
  return (
    <h2 className={`text-blue-400 text-2xl font-bold mb-2 print:text-lg ${className}`}>{title}</h2>
  )
}
const Bumper = () => {
  return (
    <div className="my-4 print:my-1">
      <hr className="my-4 print:my-1"></hr>
    </div>
  )
}
const Resume = () => {
  const componentRef = useRef<HTMLDivElement>(null)

  return (
    <>
      <Head>
        <style>{`
          @media print {
            header,
            footer {
              display: none !important;
            }

            body {
              margin: 0 !important;
              padding: 0 !important;
            }

            .print\\:hidden {
              display: none !important;
            }
          }
        `}</style>
      </Head>
      <div ref={componentRef} className="mx-auto p-4 md:p-6 lg:p-8 print:p-2 print:mx-8 print:my-6">
        <h1 className="text-3xl font-bold mb-4 print:text-xl print:mb-2">John Simmons</h1>
        <div className="mb-4 print:mb-2 print:text-sm">
          <p className="text-base print:text-sm">
            <span className="font-bold">Email:</span> johnsimmons@protonmail.com
            {' • '}
            <span className="font-bold">Phone:</span> 219-576-2624
          </p>
          <p className="text-base print:text-sm">
            <span className="font-bold">Blog:</span>{' '}
            <a href="https://perpetua.digital" className="underline cursor-pointer text-blue-400">
              https://perpetua.digital/
            </a>
            {' • '}
            <span className="font-bold">LinkedIn:</span>{' '}
            <a
              href="https://www.linkedin.com/in/johndavidsimmons/"
              className="underline cursor-pointer text-blue-400"
            >
              linkedin.com/in/johndavidsimmons
            </a>
          </p>
        </div>
        <SectionHeading title="Summary" />
        <p className="text-lg mb-4 print:text-base print:mb-2">
          Software engineer with 10 years of experience specializing in Adobe Experience Cloud
          technical implementation, stakeholder enablement, and project consulting.
        </p>
        <Bumper />
        <SectionHeading title="Adobe Certifications" />
        <div className="mb-4 print:mb-2">
          <p className="text-sm print:text-xs mb-2">
            Verification:{' '}
            <a
              href="https://perpetua.digital/certs"
              target="_blank"
              className="underline cursor-pointer text-blue-400"
              rel="noreferrer"
            >
              https://perpetua.digital/certs
            </a>
          </p>
          {Certifications.map((group) => (
            <p key={group.product} className="text-base print:text-base mb-1">
              <span className="font-bold print:text-xs">{group.product}: </span>
              <span className="print:text-xs">{group.certs.join(', ')}</span>
            </p>
          ))}
        </div>
        {/* <Bumper />
        <SectionHeading title="Skills and Tools" />
        <ul className="list-none mb-4 flex flex-wrap print:mb-2">
          {Skills.map((skill, index) => (
            <li key={index} className="mr-2 mb-2 print:mr-1 print:mb-1">
              <p className="text-lg print:text-sm">
                {skill}
                {index !== Skills.length - 1 ? ' • ' : ''}
              </p>
            </li>
          ))}
        </ul> */}
        <Bumper />
        <SectionHeading title="Experience" />
        <ul className="list-none mb-4 print:mb-2">
          {Experience.map((exp, index) => (
            <li key={index} className="pb-4 print:pb-2">
              <h3 className="text-xl font-bold print:text-base">{exp.title}</h3>
              <p className="text-lg mb-1 print:text-sm">
                {exp.company}
                <span className="text-sm print:text-xs">
                  {' '}
                  | {exp.startDate} - {exp.endDate}{' '}
                </span>
              </p>
              <p className="text-sm mb-1 print:text-xs"></p>
              <p className="text-lg mb-1 print:text-sm">{exp.description}</p>
            </li>
          ))}
        </ul>
        <Bumper />
        <SectionHeading title="Projects" />
        <ul className="list-none mb-4 print:mb-2">
          {Projects.map((project, index) => (
            <li key={index} className="pb-4 print:pb-2">
              <h3 className="text-xl font-bold print:text-base">{project.title}</h3>
              <p className="text-lg mb-1 print:text-sm">{project.description}</p>
              <p className="text-lg mb-1 print:text-sm">
                <a
                  className="underline cursor-pointer text-blue-400"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.url}
                </a>
              </p>
            </li>
          ))}
        </ul>
        <Bumper />
        <SectionHeading title="Education" />
        <ul className="list-none mb-4 print:mb-2">
          {Education.map((edu, index) => (
            <li key={index} className="pb-4 print:pb-2">
              <h3 className="text-xl font-bold print:text-base">{edu.title}</h3>
              <p className="text-lg mb-1 print:text-sm">
                {edu.institution}
                <span className="text-lg print:text-sm"> | {edu.date} </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Resume
