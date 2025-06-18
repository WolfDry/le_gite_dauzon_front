import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Paragraph } from '../../components/atoms/Text'
import { dark } from '../../assets/color'

const meta: Meta<typeof Paragraph> = {
  title: 'Components/Text/Paragraph',
  component: Paragraph,
  args: {
    children: "Paragraph",
    color: dark,
    fontSize: "1rem",
    fontStyle: "normal",
    fonctWeight: "400",
    lineWeight: "normal",
    border: "0px solid black",
  },
  argTypes: {
    children: { control: 'text', description: 'Valeur du texte' },
    color: { control: 'color', description: 'Couleur du texte' },
    fontSize: { control: 'text', description: 'Taille du texte' },
    fontStyle: { control: 'text', description: 'Style du texte' },
    fonctWeight: { control: 'text', description: 'Font weight du texte' },
    lineWeight: { control: 'text', description: 'Line weight du texte' },
    border: { control: 'text', description: 'Border du texte' },
  },
}

export default meta

type Story = StoryObj<typeof Paragraph>

export const Default: Story = {}
