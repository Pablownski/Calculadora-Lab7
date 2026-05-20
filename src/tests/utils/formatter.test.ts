import { describe, it, expect } from 'vitest'
import { truncateDecimal, formatDisplay } from '../../utils/formatter'

describe('formatter', () => {
  describe('truncateDecimal', () => {
    it('keeps short integers intact', () => expect(truncateDecimal(42)).toBe('42'))
    it('rounds to 8 decimal places', () => expect(truncateDecimal(1 / 3).length).toBeLessThanOrEqual(9))
    it('truncates long result to MAX_LENGTH', () => {
      const result = truncateDecimal(1.23456789012)
      expect(result.length).toBeLessThanOrEqual(9)
    })
  })

  describe('formatDisplay', () => {
    it('returns string as-is when under limit', () => expect(formatDisplay('12345')).toBe('12345'))
    it('truncates strings longer than 9 characters', () => expect(formatDisplay('1234567890').length).toBe(9))
  })
})
