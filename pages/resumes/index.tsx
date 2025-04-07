import React from 'react'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import Head from 'next/head'

export async function getStaticProps() {
  // Get the directory path
  const resumesDirectory = path.join(process.cwd(), 'pages/resumes')

  // Read all files in the directory
  const filenames = fs.readdirSync(resumesDirectory)

  // Filter for only .tsx files and exclude index.tsx itself
  const resumeFiles = filenames
    .filter((filename) => filename.endsWith('.tsx') && filename !== 'index.tsx')
    .map((filename) => ({
      name: filename.replace('.tsx', ''),
      path: `/resumes/${filename.replace('.tsx', '')}`,
    }))

  return {
    props: {
      resumeTemplates: resumeFiles,
    },
  }
}

const ResumeTemplatesPage = ({ resumeTemplates }) => {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Resume Templates</title>
      </Head>
      <h1 className="text-3xl font-bold mb-6">Resume Templates</h1>
      <p className="mb-6">Select a resume template to view:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ul>
          {resumeTemplates.map((template) => (
            <li key={template.name}>
              <Link href={template.path}>
                <div>
                  <h2 className="text-xl font-semibold capitalize cursor-pointer pb-2 hover:underline">
                    {template.name}
                  </h2>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ResumeTemplatesPage
