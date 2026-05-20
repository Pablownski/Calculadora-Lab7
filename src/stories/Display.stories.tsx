import type { Meta, StoryObj } from '@storybook/react'
import { Display } from '../components/Display'

const meta: Meta<typeof Display> = {
  title: 'Components/Display',
  component: Display,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
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

export const Default: Story = { args: { value: '0' } }
export const LargeNumber: Story = { args: { value: '123456789' } }
export const Decimal: Story = { args: { value: '3.1415926' } }
export const Negative: Story = { args: { value: '-12345' } }
export const Error: Story = { args: { value: 'ERROR' } }
