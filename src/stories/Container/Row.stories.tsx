import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Row } from '../../components/atoms/Container'
import { Action, Container } from '../../components/atoms'

const meta: Meta<typeof Row> = {
  title: 'Components/Container/Row',
  component: Row,
  args: {
    children: (
      <>
        <Action.Button>Button</Action.Button>
        <Action.Link to="https://example.com">Lien</Action.Link>
        <Container.Column padding="1rem" background="#ddd">
          <p>Colonne imbriquée</p>
          <p>Colonne imbriquée</p>
        </Container.Column>
        <Container.Row>
          <p>Ligne imbriquée</p>
          <p>Ligne imbriquée</p>
        </Container.Row>
      </>
    ),
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2rem',
    margin: '2rem',
    gap: '1rem',
    background: '#f0f0f0',
    width: '100%',
  },
  argTypes: {
    alignItems: { control: 'text', description: 'align-items CSS value' },
    justifyContent: { control: 'text', description: 'justify-content CSS value' },
    padding: { control: 'text', description: 'Padding intérieur du container' },
    margin: { control: 'text', description: 'Margin intérieur du container' },
    gap: { control: 'text', description: 'Espace entre les éléments enfants' },
    background: { control: 'color', description: 'Couleur de fond' },
    width: { control: 'text', description: 'Largeur du container' },
    height: { control: 'text', description: 'Hauteur du container' },
    children: { control: false, description: 'Un ou plusieurs éléments React (boutons, liens, containers...)' },
  },
}

export default meta

type Story = StoryObj<typeof Row>

export const Default: Story = {}