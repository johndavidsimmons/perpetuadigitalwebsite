import { GetServerSideProps } from 'next'
import fs from 'fs'
import path from 'path'

export default function Resume() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const filePath = path.join(process.cwd(), 'public', 'static', 'JohnSimmonsResume.pdf')

  try {
    const fileBuffer = fs.readFileSync(filePath)

    res.setHeader('Content-Type', 'application/pdf')
    res.setHeader('Content-Disposition', 'attachment; filename="JohnSimmonsResume.pdf"')
    res.write(fileBuffer)
    res.end()

    return { props: {} }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
