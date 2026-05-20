import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['number', 'operation', 'equal', 'special'] }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: '7', onClick: () => {}, variant: 'number' }
}

export const Operation: Story = {
  args: { label: '+', onClick: () => {}, variant: 'operation' }
}

export const Equal: Story = {
  args: { label: '=', onClick: () => {}, variant: 'equal' }
}

export const Special: Story = {
  args: { label: 'C', onClick: () => {}, variant: 'special' }
}

export const Wide: Story = {
  args: { label: '0', onClick: () => {}, variant: 'number', wide: true },
  decorators: [
    (Story) => (
      <div style={{ width: 160 }} className="grid grid-cols-2 gap-2">
        <Story />
      </div>
    )
  ]
}
