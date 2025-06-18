import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Title } from '../../components/atoms/Text'
import { dark } from '../../assets/color'

const meta: Meta<typeof Title> = {
  title: 'Components/Text/Title',
  component: Title,
  args: {
    children: "Title",
    textAlign: "center",
    color: dark,
    fontFamily: "Handlee",
    fontSize: "1rem",
    fontStyle: "normal",
    fonctWeight: "400",
    lineWeight: "normal",
  },
  argTypes: {
    children: { control: 'text', description: 'Valeur du texte' },
    textAlign: { control: 'text', description: 'Alignement du texte' },
    color: { control: 'color', description: 'Couleur du texte' },
    fontFamily: { control: 'text', description: 'Police du texte' },
    fontSize: { control: 'text', description: 'Taille du texte' },
    fontStyle: { control: 'text', description: 'Style du texte' },
    fonctWeight: { control: 'text', description: 'Font weight du texte' },
    lineWeight: { control: 'text', description: 'Line weight du texte' },
  },
}

export default meta

type Story = StoryObj<typeof Title>

export const Default: Story = {}
