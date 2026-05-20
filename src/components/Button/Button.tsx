import { motion } from 'framer-motion'
import type { ButtonProps } from '../../types/calculator.types'
import { variantClasses } from './buttonVariants'
const BASE_CLS = [
  'h-14 rounded-xl font-semibold text-lg cursor-pointer backdrop-blur-sm',
  'transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-purple-400'
].join(' ')
export const Button = ({ label, onClick, variant = 'number', wide = false, 'aria-label': ariaLabel }: ButtonProps) => (
  <motion.button
    whileTap={{ scale: 0.93 }} whileHover={{ scale: 1.04 }}
    transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    onClick={onClick} aria-label={ariaLabel ?? label}
    className={`${BASE_CLS} ${wide ? 'col-span-2' : ''} ${variantClasses[variant]}`}
  >
    {label}
  </motion.button>
)
