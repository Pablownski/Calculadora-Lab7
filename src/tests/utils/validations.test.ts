import { describe, it, expect } from 'vitest'
import {
  isOverflow, isNegative, isMaxLength, hasDecimal, isDivisionByZero, isInvalidResult
} from '../../utils/validations'

describe('validations', () => {
  describe('isOverflow', () => {
    it('detects overflow above 999999999', () => expect(isOverflow(1000000000)).toBe(true))
    it('allows exactly 999999999', () => expect(isOverflow(999999999)).toBe(false))
  })

  describe('isNegative', () => {
    it('detects negative number', () => expect(isNegative(-1)).toBe(true))
    it('allows positive', () => expect(isNegative(1)).toBe(false))
    it('allows zero', () => expect(isNegative(0)).toBe(false))
  })

  describe('isMaxLength', () => {
    it('detects 9-digit string as max', () => expect(isMaxLength('123456789')).toBe(true))
    it('allows 8-digit string', () => expect(isMaxLength('12345678')).toBe(false))
    it('ignores minus sign', () => expect(isMaxLength('-12345678')).toBe(false))
    it('ignores decimal point', () => expect(isMaxLength('1234.5678')).toBe(false))
  })

  describe('hasDecimal', () => {
    it('detects decimal point', () => expect(hasDecimal('1.5')).toBe(true))
    it('returns false without decimal', () => expect(hasDecimal('15')).toBe(false))
  })

  describe('isDivisionByZero', () => {
    it('detects zero divisor', () => expect(isDivisionByZero(0)).toBe(true))
    it('allows non-zero divisor', () => expect(isDivisionByZero(5)).toBe(false))
  })

  describe('isInvalidResult', () => {
    it('flags negative result', () => expect(isInvalidResult(-1)).toBe(true))
    it('flags overflow result', () => expect(isInvalidResult(1000000000)).toBe(true))
    it('flags Infinity', () => expect(isInvalidResult(Infinity)).toBe(true))
    it('allows valid result', () => expect(isInvalidResult(42)).toBe(false))
  })
})
