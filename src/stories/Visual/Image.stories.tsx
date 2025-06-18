import type { Meta, StoryObj } from '@storybook/react-webpack5'
import { Image } from '../../components/atoms/Visual'

const meta: Meta<typeof Image> = {
  title: 'Components/Visual/Image',
  component: Image,
  args: {
    width: "120px",
    height: "120px",
    alignItems: "center",
    padding: "15px",
    borderRadius: "0px black solid",
  },
  argTypes: {
    children: { control: false }
  },
}

export default meta

type Story = StoryObj<typeof Image>

export const Default: Story = {}
