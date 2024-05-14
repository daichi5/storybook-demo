import type { Meta, StoryObj } from '@storybook/react';
import { Composed } from './index';
import { userEvent, within, expect } from '@storybook/test';
import MockDate from 'mockdate';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Composed',
  component: Composed,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  args: { },
  async beforeEach() {
    MockDate.set('2024-04-01');

    console.log('hello')

    // 👇 Reset the Date after each story
    return () => {
      MockDate.reset();
    };
  },

} satisfies Meta<typeof Composed>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const inner = canvas.getByTestId('inner');
    const innerCanvas = within(inner);


    const button1 = canvas.getByText('Button1');
    const button2 = canvas.getByText('Button2');
    const TextField = innerCanvas.getByLabelText('Text Field');

    await userEvent.click(button1);
    await userEvent.type(TextField, 'Hello, World!', { delay: 100 });

    await userEvent.click(canvas.getByText('Button2'));

    await expect(canvas.getByText('Button1')).toBeInTheDocument();
    await expect(canvas.getByText('current date is 1')).toBeInTheDocument();
  }
};
