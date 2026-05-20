import type { Meta, StoryObj } from '@storybook/react'
import { Calculator } from '../components/Calculator'

const meta: Meta<typeof Calculator> = {
  title: 'Components/Calculator',
  component: Calculator,
  parameters: { layout: 'centered' },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const OnDarkBackground: Story = {
  parameters: { backgrounds: { default: 'dark' } }
}

export const OnLightBackground: Story = {
  parameters: { backgrounds: { default: 'light' } }
}

export const MobileViewport: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    backgrounds: { default: 'dark' }
  }
}

export const TabletViewport: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    },
    backgrounds: { default: 'dark' }
  }
}
