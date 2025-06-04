import Home from '@/app/(app-shell)/page'
import { render, screen } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

describe('Home component', () => {
  test('renders the main headline elements', () => {
    render(<Home />)

    expect(screen.getByAltText('Next.js logo')).toBeInTheDocument()

    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument()
    expect(
      screen.getByText(/Save and see your changes instantly./i)
    ).toBeInTheDocument()
  })

  test('renders the deploy and docs links', () => {
    render(<Home />)

    const deployButton = screen.getByRole('link', { name: /Deploy now/i })
    const docsLink = screen.getByRole('link', { name: /Read our docs/i })

    expect(deployButton).toBeInTheDocument()
    expect(docsLink).toBeInTheDocument()

    expect(deployButton).toHaveAttribute(
      'href',
      expect.stringContaining('vercel.com/new')
    )
    expect(docsLink).toHaveAttribute(
      'href',
      expect.stringContaining('nextjs.org/docs')
    )
  })

  test('renders the footer links', () => {
    render(<Home />)

    const footerLinks = [
      { name: /Learn/i, url: 'nextjs.org/learn' },
      { name: /Examples/i, url: 'vercel.com/templates' },
      { name: /Go to nextjs.org/i, url: 'nextjs.org' }
    ]

    for (const link of footerLinks) {
      const footerLink = screen.getByRole('link', { name: link.name })
      expect(footerLink).toBeInTheDocument()
      expect(footerLink).toHaveAttribute(
        'href',
        expect.stringContaining(link.url)
      )
    }
  })
})
