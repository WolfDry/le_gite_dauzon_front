import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Label } from '../../components/atoms/Text'

const meta: Meta<typeof Label> = {
  title: 'Components/Text/Label',
  component: Label,
  args: {
    children: "Label"
  },
  argTypes: {
    children: { control: 'text', description: 'Valeur du texte' }
  },
}

export default meta

type Story = StoryObj<typeof Label>

export const Default: Story = {}
