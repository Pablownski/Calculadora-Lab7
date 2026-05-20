import '@testing-library/jest-dom'
import { vi } from 'vitest'
import React from 'react'

const MOTION_PROPS = new Set([
  'whileTap', 'whileHover', 'whileFocus', 'whileInView', 'whileDrag',
  'animate', 'initial', 'exit', 'variants', 'transition',
  'layout', 'layoutId', 'drag', 'dragConstraints', 'onAnimationStart',
  'onAnimationComplete', 'onDragStart', 'onDragEnd'
])

const makeMotionElement = (tag: string) => {
  const C = ({ children, ...props }: React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }) => {
    const filtered = Object.fromEntries(Object.entries(props).filter(([k]) => !MOTION_PROPS.has(k)))
    return React.createElement(tag, filtered, children)
  }
  C.displayName = `motion.${tag}`
  return C
}

const motion: Record<string, ReturnType<typeof makeMotionElement>> = {}
const TAGS = ['button', 'div', 'span', 'section', 'main', 'header', 'footer', 'nav', 'ul', 'li', 'p']
TAGS.forEach(tag => { motion[tag] = makeMotionElement(tag) })

vi.mock('framer-motion', () => ({
  motion,
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useAnimation: () => ({ start: vi.fn(), stop: vi.fn() })
}))
