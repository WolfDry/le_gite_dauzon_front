import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Link } from '../../components/atoms/Action'

const meta: Meta<typeof Link> = {
  title: 'Components/Action/Link',
  component: Link,
  args: {
    children: 'Clique ici',
    href: 'https://google.com',
    target: '_blank',
    fontSize: '1.5rem',
  },
  argTypes: {
    fontSize: { control: 'text', description: 'Taille de la police d\'écriture' },
    children: { control: 'text', description: 'Contenu HTML/texte du lien' },
  },
}

export default meta

type Story = StoryObj<typeof Link>

export const Default: Story = {}
