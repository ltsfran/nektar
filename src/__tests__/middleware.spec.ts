import { middleware } from '@/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { describe, expect, test, vi } from 'vitest'

describe('middleware', () => {
  test('should return a response', async () => {
    const req = new NextRequest('http://localhost:3000', {})
    const res = await middleware(req)
    expect(res).toBeDefined()
  })

  test('should return a response with a 500 status code', async () => {
    vi.spyOn(NextResponse, 'next').mockImplementationOnce(() => {
      throw new Error('Something went wrong!')
    })
    const req = new NextRequest('http://localhost:3000', {})
    const res = await middleware(req)
    expect(res.status).toBe(500)
  })
})
