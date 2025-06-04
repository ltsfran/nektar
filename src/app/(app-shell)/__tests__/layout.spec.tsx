import ShellLayout from '@/app/(app-shell)/layout'
import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

describe('ShellLayout', () => {
  test('should render children', () => {
    const { container } = render(<ShellLayout>Test</ShellLayout>)
    expect(container).toHaveTextContent('Test')
  })
})
