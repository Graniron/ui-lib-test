import type { Meta, StoryObj } from '@storybook/react';
import React from 'react'

import { Tabs, TabsHeader, TabsHeaders, TabsPanel } from './Tabs';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Radix/Tabs',
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
    docs: {
      description: {
        component: 'Tabs component based on the Radix UI Tabs component: https://radix-ui.com/primitives/docs/components/tabs'
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   value: { control: 'radio', options: ['tab1', 'tab2'] },
  // },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain = () => {
  return (
    <Tabs defaultValue="tab1">
      <TabsHeaders>
        <TabsHeader value="tab1">Tab 1</TabsHeader>
        <TabsHeader value="tab2">Tab 2</TabsHeader>
      </TabsHeaders>
      <TabsPanel value="tab1">Tab 1 Content</TabsPanel>
      <TabsPanel value="tab2">Tab 2 Content</TabsPanel>
    </Tabs>
  )
};


