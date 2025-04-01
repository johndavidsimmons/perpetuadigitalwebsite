import { NextResponse } from 'next/server'
import type { NextFetchEvent, NextRequest } from 'next/server'

export default function middleware(req: NextRequest, ev: NextFetchEvent) {
  // Only protect the /resume route
  if (req.nextUrl.pathname.includes('resume')) {
    const basicAuth = req.headers.get('authorization')

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1]
      const [user, pwd] = atob(authValue).split(':')

      // Replace these with your desired username and password
      if (user === 'john' && pwd === 'emuser') {
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
