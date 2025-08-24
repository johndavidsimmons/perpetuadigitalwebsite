import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export default function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  const isStaging = host.includes('staging') || process.env.VERCEL_ENV === 'preview'

  // Skip authentication for localhost
  if (host.includes('localhost') || host.includes('127.0.0.1')) {
    return NextResponse.next()
  }

  // Protect staging environment with HTTP Basic Auth
  if (isStaging) {
    const basicAuth = req.headers.get('authorization')

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1]
      const [user, pwd] = atob(authValue).split(':')

      // Replace these with your desired username and password
      const stagingUser = process.env.STAGING_AUTH_USER || 'staging'
      const stagingPass = process.env.STAGING_AUTH_PASS || 'password'
      if (user === stagingUser && pwd === stagingPass) {
        return NextResponse.next()
      }
    }

    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Staging Area"',
      },
    })
  }

  // Protect the /resume route on production
  if (req.nextUrl.pathname.includes('resumes')) {
    const basicAuth = req.headers.get('authorization')

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1]
      const [user, pwd] = atob(authValue).split(':')

      // Replace these with your desired username and password
      if (user === 'john' && pwd === 'resume') {
        return NextResponse.next()
      }
    }

    return new NextResponse('Authentication required', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
