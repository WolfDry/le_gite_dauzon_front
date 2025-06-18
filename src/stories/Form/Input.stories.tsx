import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Input } from '../../components/atoms/Form'

const meta: Meta<typeof Input> = {
  title: 'Components/Form/Input',
  component: Input,
  args: {
    padding: '15px',
    width: '120px',
    textAlign: 'center'
  },
  argTypes: {
    padding: { control: 'text', description: 'Padding intérieur du container' },
    width: { control: 'text', description: 'Largeur de l\'input' },
    textAlign: { control: 'text', description: 'Alignement du texte' }
  },
}

export default meta

type Story = StoryObj<typeof Input>

export const Default: Story = {}
