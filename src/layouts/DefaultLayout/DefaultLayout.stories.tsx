import React from 'react'

import { StoryFn, Meta } from '@storybook/react'

import DefaultLayout from './DefaultLayout'

export default {
  title: 'layouts/DefaultLayout',
  component: DefaultLayout,
} as Meta<typeof DefaultLayout>

const Template: StoryFn<typeof DefaultLayout> = (args) => (
  <DefaultLayout {...args}>Content</DefaultLayout>
)

export const Default = {
  render: Template,

  args: {},

  parameters: {
    layout: 'fullscreen',
  },
}
