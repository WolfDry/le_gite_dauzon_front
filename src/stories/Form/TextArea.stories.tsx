import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { TextArea } from '../../components/atoms/Form'

const meta: Meta<typeof TextArea> = {
  title: 'Components/Form/TextArea',
  component: TextArea,
  args: {
  },
  argTypes: {
  },
}

export default meta

type Story = StoryObj<typeof TextArea>

export const Default: Story = {}
