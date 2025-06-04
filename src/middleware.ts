import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  try {
    const response = NextResponse.next()
    return response
  } catch {
    const rewriteResponse = NextResponse.rewrite(
      new URL('/internal-error', request.url),
      {
        status: 500
      }
    )
    return rewriteResponse
  }
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|images).*)'
  ]
}
