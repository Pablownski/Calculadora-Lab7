import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Keyboard } from '../components/Keyboard'

const meta: Meta<typeof Keyboard> = {
  title: 'Components/Keyboard',
  component: Keyboard,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: {
    onNumber: fn(),
    onOperation: fn(),
    onEqual: fn(),
    onClear: fn(),
    onToggleSign: fn(),
    onDecimal: fn()
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }} className="bg-white/5 rounded-2xl border border-white/10">
        <Story />
      </div>
    )
  ]
}

export default meta
type Story = StoryObj<typeof meta>

export const Full: Story = {}
