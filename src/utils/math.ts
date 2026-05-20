import type { Operation } from '../types/calculator.types'

export const add = (a: number, b: number): number => a + b
export const subtract = (a: number, b: number): number => a - b
export const multiply = (a: number, b: number): number => a * b
export const divide = (a: number, b: number): number => a / b
export const modulo = (a: number, b: number): number => a % b

export const calculate = (prev: number, curr: number, op: Operation): number => {
  switch (op) {
    case '+': return add(prev, curr)
    case '-': return subtract(prev, curr)
    case '×': return multiply(prev, curr)
    case '÷': return divide(prev, curr)
    case '%': return modulo(prev, curr)
  }
}
