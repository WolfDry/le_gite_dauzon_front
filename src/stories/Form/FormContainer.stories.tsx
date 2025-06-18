import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { FormContainer } from '../../components/atoms/Form'
import { Form } from '../../components/atoms'

const meta: Meta<typeof FormContainer> = {
  title: 'Components/Form/FormContainer',
  component: FormContainer,
  args: {
    children: (
      <>
        <Form.Input placeholder="Input" />
        <Form.Input placeholder="Input" />
        <Form.TextArea placeholder="Textarea" />
        <Form.Button>
          Valider
        </Form.Button>
      </>
    ),
  },
  argTypes: {
    children: { control: false, description: 'Un ou plusieurs éléments React (boutons, liens, containers...)' },
  },
}

export default meta

type Story = StoryObj<typeof FormContainer>

export const Default: Story = {}