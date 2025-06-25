import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Grid } from '../../components/atoms/Container'
import { Action, Container } from '../../components/atoms'

const meta: Meta<typeof Grid> = {
  title: 'Components/Container/Grid',
  component: Grid,
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
    )
  },
  argTypes: {
    children: { control: false, description: 'Un ou plusieurs éléments React (boutons, liens, containers...)' },
  },
}

export default meta

type Story = StoryObj<typeof Grid>

export const Default: Story = {}