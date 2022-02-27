import { ComponentStory, ComponentMeta } from '@storybook/react'

import Loader from './Loader'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Loader',
  component: Loader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />

export const Blue = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Blue.args = {
  color: 'blue',
}

export const Green = Template.bind({})
Green.args = {
  color: 'green',
}
