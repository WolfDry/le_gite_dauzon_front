import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Icon } from '../../components/atoms/Visual'

const meta: Meta<typeof Icon> = {
  title: 'Components/Visual/Icon',
  component: Icon,
  args: {
  },
  argTypes: {
    children: { control: false }
  },
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {}
