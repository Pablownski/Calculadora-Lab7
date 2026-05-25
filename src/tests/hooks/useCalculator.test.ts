import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCalculator } from '../../hooks/useCalculator'

describe('useCalculator hook', () => {
  it('shows 0 initially', () => {
    const { result } = renderHook(() => useCalculator())
    expect(result.current.display).toBe('0')
  })

  it('concatenates digits', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputNumber('1') })
    act(() => { result.current.inputNumber('2') })
    act(() => { result.current.inputNumber('3') })
    expect(result.current.display).toBe('123')
  })

  it('enforces 9-character limit', () => {
    const { result } = renderHook(() => useCalculator())
    '1234567890'.split('').forEach(d => act(() => { result.current.inputNumber(d) }))
    expect(result.current.display.length).toBeLessThanOrEqual(9)
  })

  it('prevents duplicate decimal', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputNumber('1') })
    act(() => { result.current.inputDecimal() })
    act(() => { result.current.inputDecimal() })
    act(() => { result.current.inputNumber('2') })
    expect(result.current.display).toBe('1.2')
  })

  it('adds two numbers', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputNumber('5') })
    act(() => { result.current.setOperation('+') })
    act(() => { result.current.inputNumber('5') })
    act(() => { result.current.calculate() })
    expect(result.current.display).toBe('10')
  })

  it('subtracts two numbers', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputNumber('9') })
    act(() => { result.current.setOperation('-') })
    act(() => { result.current.inputNumber('2') })
    act(() => { result.current.calculate() })
    expect(result.current.display).toBe('7')
  })

  it('multiplies two numbers', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputNumber('5') })
    act(() => { result.current.setOperation('×') })
    act(() => { result.current.inputNumber('5') })
    act(() => { result.current.calculate() })
    expect(result.current.display).toBe('25')
  })

  it('divides two numbers', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputNumber('1') })
    act(() => { result.current.inputNumber('0') })
    act(() => { result.current.setOperation('÷') })
    act(() => { result.current.inputNumber('2') })
    act(() => { result.current.calculate() })
    expect(result.current.display).toBe('5')
  })

  it('calculates modulo', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputNumber('1') })
    act(() => { result.current.inputNumber('0') })
    act(() => { result.current.setOperation('%') })
    act(() => { result.current.inputNumber('3') })
    act(() => { result.current.calculate() })
    expect(result.current.display).toBe('1')
  })

  it('shows ERROR for negative result', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputNumber('2') })
    act(() => { result.current.setOperation('-') })
    act(() => { result.current.inputNumber('5') })
    act(() => { result.current.calculate() })
    expect(result.current.display).toBe('ERROR')
  })

  it('shows ERROR on overflow', () => {
    const { result } = renderHook(() => useCalculator())
    '999999999'.split('').forEach(d => act(() => { result.current.inputNumber(d) }))
    act(() => { result.current.setOperation('+') })
    act(() => { result.current.inputNumber('1') })
    act(() => { result.current.calculate() })
    expect(result.current.display).toBe('ERROR')
  })

  it('shows ERROR on division by zero', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputNumber('1') })
    act(() => { result.current.inputNumber('0') })
    act(() => { result.current.setOperation('÷') })
    act(() => { result.current.inputNumber('0') })
    act(() => { result.current.calculate() })
    expect(result.current.display).toBe('ERROR')
  })

  it('toggles sign positive to negative', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputNumber('5') })
    act(() => { result.current.toggleSign() })
    expect(result.current.display).toBe('-5')
  })

  it('toggles sign negative back to positive', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputNumber('5') })
    act(() => { result.current.toggleSign() })
    act(() => { result.current.toggleSign() })
    expect(result.current.display).toBe('5')
  })

  it('chains operations correctly', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputNumber('2') })
    act(() => { result.current.setOperation('+') })
    act(() => { result.current.inputNumber('2') })
    act(() => { result.current.setOperation('+') })
    act(() => { result.current.inputNumber('2') })
    act(() => { result.current.calculate() })
    expect(result.current.display).toBe('6')
  })

  it('counts minus sign within 9-char limit', () => {
    const { result } = renderHook(() => useCalculator())
    '123456789'.split('').forEach(d => act(() => { result.current.inputNumber(d) }))
    act(() => { result.current.toggleSign() })
    expect(result.current.display).toBe('123456789')
  })

  it('counts decimal point within 9-char limit', () => {
    const { result } = renderHook(() => useCalculator())
    '123456789'.split('').forEach(d => act(() => { result.current.inputNumber(d) }))
    act(() => { result.current.inputDecimal() })
    expect(result.current.display).toBe('123456789')
  })

  it('allows toggle sign when result fits within 9 chars', () => {
    const { result } = renderHook(() => useCalculator())
    '12345678'.split('').forEach(d => act(() => { result.current.inputNumber(d) }))
    act(() => { result.current.toggleSign() })
    expect(result.current.display).toBe('-12345678')
  })

  it('clears to initial state', () => {
    const { result } = renderHook(() => useCalculator())
    act(() => { result.current.inputNumber('9') })
    act(() => { result.current.clear() })
    expect(result.current.display).toBe('0')
  })
})
