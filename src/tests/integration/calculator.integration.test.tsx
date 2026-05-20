import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Calculator } from '../../components/Calculator'

const click = (label: string) => fireEvent.click(screen.getByRole('button', { name: label }))
const display = () => screen.getByRole('status').textContent

describe('Calculator integration', () => {
  it('shows 0 on initial render', () => {
    render(<Calculator />)
    expect(display()).toBe('0')
  })

  it('inputs a number', () => {
    render(<Calculator />)
    click('7')
    expect(display()).toBe('7')
  })

  it('adds 5 + 5 = 10', () => {
    render(<Calculator />)
    click('5')
    click('operation +')
    click('5')
    click('equals')
    expect(display()).toBe('10')
  })

  it('subtracts 9 - 2 = 7', () => {
    render(<Calculator />)
    click('9')
    click('operation -')
    click('2')
    click('equals')
    expect(display()).toBe('7')
  })

  it('multiplies 5 × 5 = 25', () => {
    render(<Calculator />)
    click('5')
    click('operation ×')
    click('5')
    click('equals')
    expect(display()).toBe('25')
  })

  it('divides 10 ÷ 2 = 5', () => {
    render(<Calculator />)
    click('1')
    click('0')
    click('operation ÷')
    click('2')
    click('equals')
    expect(display()).toBe('5')
  })

  it('shows ERROR for 2 - 5', () => {
    render(<Calculator />)
    click('2')
    click('operation -')
    click('5')
    click('equals')
    expect(display()).toBe('ERROR')
  })

  it('shows ERROR on division by zero', () => {
    render(<Calculator />)
    click('9')
    click('operation ÷')
    click('0')
    click('equals')
    expect(display()).toBe('ERROR')
  })

  it('clears display', () => {
    render(<Calculator />)
    click('5')
    click('clear')
    expect(display()).toBe('0')
  })

  it('toggles sign', () => {
    render(<Calculator />)
    click('5')
    click('toggle sign')
    expect(display()).toBe('-5')
  })

  it('prevents duplicate decimal point', () => {
    render(<Calculator />)
    click('1')
    click('decimal')
    click('decimal')
    click('2')
    expect(display()).toBe('1.2')
  })

  it('chains 2 + 2 + 2 = 6', () => {
    render(<Calculator />)
    click('2')
    click('operation +')
    click('2')
    click('operation +')
    click('2')
    click('equals')
    expect(display()).toBe('6')
  })
})
