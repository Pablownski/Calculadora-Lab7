import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Display } from '../../components/Display'

describe('Display component', () => {
  it('renders a numeric value', () => {
    render(<Display value="42" />)
    expect(screen.getByText('42')).toBeInTheDocument()
  })

  it('renders ERROR text', () => {
    render(<Display value="ERROR" />)
    expect(screen.getByText('ERROR')).toBeInTheDocument()
  })

  it('renders initial zero', () => {
    render(<Display value="0" />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('has role=status for screen readers', () => {
    render(<Display value="5" />)
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
