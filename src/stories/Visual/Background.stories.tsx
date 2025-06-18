import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Background } from '../../components/atoms/Visual'

const meta: Meta<typeof Background> = {
  title: 'Components/Visual/Background',
  component: Background,
  args: {
  },
  argTypes: {
    children: { control: false }
  },
}

export default meta

type Story = StoryObj<typeof Background>

export const Default: Story = {}
