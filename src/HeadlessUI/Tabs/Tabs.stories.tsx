import type { Meta, StoryObj } from '@storybook/react';
import React from 'react'

import { TabsH, TabsHHeader, TabsHHeaders, TabsHPanel, TabsHPanels } from './Tabs';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'HeadlessUI/Tabs',
  component: TabsH,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
    docs: {
      description: {
        component: 'Tabs component based on the Headless UI Tabs component: https://headlessui.dev/react/tabs'
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   value: { control: 'radio', options: ['tab1', 'tab2'] },
  // },
} satisfies Meta<typeof TabsH>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain = () => {
  return (
    <TabsH as="div">
      <TabsHHeaders>
        <TabsHHeader>Tab 1</TabsHHeader>
        <TabsHHeader>Tab 2</TabsHHeader>
        <TabsHHeader disabled>Tab 3</TabsHHeader>
      </TabsHHeaders>
      <TabsHPanels>
        <TabsHPanel>Tab 1 Content</TabsHPanel>
        <TabsHPanel>Tab 2 Content</TabsHPanel>
        <TabsHPanel>Tab 3 Content</TabsHPanel>
      </TabsHPanels>
    </TabsH>
  )
};


