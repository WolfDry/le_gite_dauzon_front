import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Button } from '../../components/atoms/Form'
import { dark } from '../../assets/color'

const meta: Meta<typeof Button> = {
  title: 'Components/Form/Button',
  component: Button,
  args: {
    children: 'Clique ici',
    background: 'transparent',
    color: dark,
  },
  argTypes: {
    background: { control: 'text' },
    color: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {}
