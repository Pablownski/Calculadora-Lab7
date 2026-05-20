import { describe, it, expect } from 'vitest'
import { add, subtract, multiply, divide, modulo, calculate } from '../../utils/math'

describe('math utils', () => {
  describe('add', () => {
    it('sums two positive numbers', () => expect(add(5, 5)).toBe(10))
    it('handles zero', () => expect(add(0, 5)).toBe(5))
  })

  describe('subtract', () => {
    it('subtracts two numbers', () => expect(subtract(9, 2)).toBe(7))
    it('returns negative when b > a', () => expect(subtract(2, 5)).toBe(-3))
  })

  describe('multiply', () => {
    it('multiplies two numbers', () => expect(multiply(5, 5)).toBe(25))
    it('handles zero', () => expect(multiply(5, 0)).toBe(0))
  })

  describe('divide', () => {
    it('divides two numbers', () => expect(divide(10, 2)).toBe(5))
    it('returns Infinity for division by zero', () => expect(divide(10, 0)).toBe(Infinity))
  })

  describe('modulo', () => {
    it('returns remainder', () => expect(modulo(10, 3)).toBe(1))
    it('handles exact division', () => expect(modulo(9, 3)).toBe(0))
  })

  describe('calculate', () => {
    it('dispatches addition', () => expect(calculate(3, 4, '+')).toBe(7))
    it('dispatches subtraction', () => expect(calculate(9, 3, '-')).toBe(6))
    it('dispatches multiplication', () => expect(calculate(3, 4, '×')).toBe(12))
    it('dispatches division', () => expect(calculate(12, 4, '÷')).toBe(3))
    it('dispatches modulo', () => expect(calculate(10, 3, '%')).toBe(1))
  })
})
