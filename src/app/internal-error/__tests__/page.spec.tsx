import InternalError from '@/app/internal-error/page'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

describe('InternalError', () => {
  test('should render children', () => {
    const { container } = render(<InternalError />)
    expect(container).toHaveTextContent('Internal Error: Something went wrong!')
    expect(container).toHaveTextContent(
      'Please try refreshing the page or contact support if the problem persists.'
    )
  })
})
