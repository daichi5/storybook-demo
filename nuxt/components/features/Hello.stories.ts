import type { Meta, StoryObj } from '@storybook/vue3'
import { userEvent, within } from '@storybook/test'

import Hello from './Hello.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction

const meta = {
  title: 'Hello',
  component: Hello,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],

} satisfies Meta<typeof Hello>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)    

    const button = canvas.getByText('hello-button')

    await userEvent.click(button)

    const textField = canvas.getByLabelText('TextField')

    await userEvent.type(textField, 'Hello World!')

    await userEvent.type(textField, 'updated')

    await userEvent.click(button)
  }
}
