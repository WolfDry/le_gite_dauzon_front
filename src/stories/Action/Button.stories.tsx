import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Button } from '../../components/atoms/Action'
import { dark } from '../../assets/color'

const meta: Meta<typeof Button> = {
  title: 'Components/Action/Button',
  component: Button,
  args: {
    children: 'Clique ici',
    background: 'transparent',
    padding: '0.75rem 2.5rem',
    color: dark,
  },
  argTypes: {
    background: { control: 'color', description: 'Couleur de fond' },
    padding: { control: 'text', description: 'Padding intérieur du bouton' },
    color: { control: 'text', description: 'Couleur du texte' },
    children: { control: 'text', description: 'Contenu HTML/texte du bouton' },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}
