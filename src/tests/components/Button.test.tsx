import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../../components/Button'

describe('Button component', () => {
  it('renders label', () => {
    render(<Button label="5" onClick={() => {}} />)
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handler = vi.fn()
    render(<Button label="9" onClick={handler} />)
    fireEvent.click(screen.getByText('9'))
    expect(handler).toHaveBeenCalledTimes(1)
  })

  it('renders with equal variant class hint', () => {
    render(<Button label="=" onClick={() => {}} variant="equal" />)
    const btn = screen.getByRole('button', { name: '=' })
    expect(btn).toBeInTheDocument()
  })

  it('uses aria-label when provided', () => {
    render(<Button label="+" onClick={() => {}} aria-label="operation +" />)
    expect(screen.getByRole('button', { name: 'operation +' })).toBeInTheDocument()
  })
})
