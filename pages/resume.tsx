import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

export const metadata = {
  title: `John Simmons - Resume`,
}

const Experience = [
  {
    title: 'Senior Analytics Engineer',
    company: 'Marriott Hotels',
    startDate: '9/24',
    endDate: 'Present',
    description:
      'I provide comprehensive guidance on the implementation and deployment of Adobe Experience Cloud solutions, including Adobe Launch, Adobe Analytics, Adobe Target, and the Adobe Experience Platform. My responsibilities include technical implementation and development and stakeholder enablement, including creating technical documentation, conducting technical training, and mentoring team members.',
  },
  {
    title: 'Senior Software Engineer',
    company: 'Rocket Money',
    startDate: '8/23',
    endDate: '8/24',
    description: `As a Senior Software Engineer, my primary focus is integrating our website and mobile
app with analytics vendors and services such as Adobe, Amplitude, Segment, Google, and
Singular. This role requires expertise in our codebases and technology stack and a deep
understanding of vendor libraries. In addition to instrumenting data collection with these
tools, I collaborate closely with our Product and Marketing teams to develop website and
app experimentation. Furthermore, I serve as an advisor on our data governance committee,
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
  {
    title: 'Adobe Certified Expert - Adobe Analytics Developer',
    product: 'Adobe Analytics',
    verificationCode: 'RXQWVQH2CNBQ1YGL',
    verificationUrl: 'https://www.certmetrics.com/adobe/public/verification.aspx',
  },
  {
    title: 'Adobe Certified Master - Adobe Target Architect',
    product: 'Adobe Target',
    verificationCode: 'JFJMMHF1KFB4QP96',
    verificationUrl: 'https://www.certmetrics.com/adobe/public/verification.aspx',
  },
]

const Projects = [
  {
    title: 'Perpetua Digital Launch Assistant',
    description:
      'I am the sole developer of the Perpetua Digital Launch Assistant. The Perpetua Digital Launch Assistant is a tool for Launch professionals that offers better Searching, Visualization of Data Elements and Rule relationships, and creating email and slack alerts for Launch properties.',
    url: 'https://assistant.perpetua.digital/',
  },
  {
    title: 'Custom Debug Logger - Launch Extension',
    description:
      'The Custom Debug Logger extension allows you write custom console logs and toast modal notifications using the Launch UI that are only visible in debug mode.',
    url: 'https://www.adobeexchange.com/experiencecloud.details.104698.html',
  },
  {
    title: 'Omnibug',
    description: 'I am a contributor to the open source analytics browser extension Omnibug',
    url: 'https://omnibug.io/',
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
  'Google Tag Manager',
  'Amplitude',
  'Segment',
  'Singular',
  'HTML',
  'CSS',
  'Sass',
  'Tailwind',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Python',
  'Node.js',
  'GraphQL',
  'Git',
  'AWS Lambda',
  'Serverless Framework',
]
const SectionHeading = ({ title, className = '' }: { title: string; className?: string }) => {
  return (
    <h2 className={`text-blue-400 text-2xl font-bold mb-2 print:text-lg ${className}`}>{title}</h2>
  )
}
const Bumper = () => {
  return (
    <div className="my-4">
      <hr className="my-4"></hr>
    </div>
  )
}
const Resume = () => {
  const componentRef = useRef<HTMLDivElement>(null)

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'John Simmons - Resume',
    preserveAfterPrint: false,
  })

  return (
    <div ref={componentRef} className="mx-auto p-4 md:p-6 lg:p-8 print:p-2 print:mx-8 print:my-6">
      <button
        onClick={(e) => handlePrint()}
        className="rounded bg-primary-500 px-4 py-2 font-medium text-white hover:bg-primary-600 dark:hover:bg-primary-400 mb-4 print:hidden"
      >
        Download PDF
      </button>
      <h1 className="text-3xl font-bold mb-4 print:text-xl print:mb-2">John Simmons</h1>
      <ul className="list-none mb-4 print:mb-2 print:text-sm">
        <li className="mb-1 print:mb-0">
          <span className="font-bold">Email:</span> john@perpetua.digital
        </li>
        <li className="mb-1 print:mb-0">
          <span className="font-bold">Phone:</span> 219-576-2624
        </li>
        <li className="mb-1 print:mb-0">
          <span className="font-bold">Blog:</span>{' '}
          <a href="https://perpetua.digital" className="underline cursor-pointer text-blue-400">
            https://perpetua.digital/
          </a>
        </li>
        <li className="mb-1 print:mb-0">
          <span className="font-bold">LinkedIn:</span>{' '}
          <a
            href="https://www.linkedin.com/in/johnsimmons/"
            className="underline cursor-pointer text-blue-400"
          >
            linkedin.com/in/johnsimmons
          </a>
        </li>
      </ul>
      <SectionHeading title="Summary" />
      <p className="text-lg mb-4 print:text-base print:mb-2">
        A software developer who specializes in the Adobe Experience Cloud.
      </p>
      <Bumper />
      <SectionHeading title="Certifications" />
      <ul className="list-none mb-4 print:mb-2">
        {Certifications.map((cert, index) => (
          <li key={index} className="pb-4 print:pb-2">
            <h3 className="text-xl font-bold print:text-base">{cert.title}</h3>
            <p className="text-lg mb-1 hover:underline cursor-pointer print:text-sm">
              <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                Verification Code: {cert.verificationCode}
              </a>
            </p>
          </li>
        ))}
      </ul>
      <Bumper />
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
      <SectionHeading title="Experience" className="print:break-before-page print:mt-8" />
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
      <SectionHeading title="Education" />
      <ul className="list-none mb-4 print:mb-2">
        {Education.map((edu, index) => (
          <li key={index} className="pb-4 print:pb-2">
            <h3 className="text-xl font-bold print:text-base">{edu.title}</h3>
            <p className="text-lg mb-1 print:text-sm">{edu.institution}</p>
            <p className="text-sm mb-1 print:text-xs">{edu.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Resume
