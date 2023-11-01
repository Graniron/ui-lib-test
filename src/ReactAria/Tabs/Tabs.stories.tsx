import type { Meta, StoryObj } from '@storybook/react';
import React from 'react'

import { TabsAria, TabsAriaHeader, TabsAriaHeaders, TabsAriaPanel } from './Tabs';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'React-Aria/Tabs',
  component: TabsAria,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    // layout: 'centered',
    docs: {
      description: {
        component: 'Tabs component based on the React-Aria Tabs component: https://react-spectrum.adobe.com/react-aria/Tabs.html'
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   value: { control: 'radio', options: ['tab1', 'tab2'] },
  // },
} satisfies Meta<typeof TabsAria>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Plain = () => {
  return (
    <TabsAria disabledKeys={['tab3']}>
      <TabsAriaHeaders>
        <TabsAriaHeader id="tab1">Tab 1</TabsAriaHeader>
        <TabsAriaHeader id="tab2">Tab 2</TabsAriaHeader>
        <TabsAriaHeader id="tab3">Tab 3</TabsAriaHeader>
      </TabsAriaHeaders>
      <TabsAriaPanel id="tab1">Tab 1 Content</TabsAriaPanel>
      <TabsAriaPanel id="tab2">Tab 2 Content</TabsAriaPanel>
      <TabsAriaPanel id="tab3">Tab 3 Content</TabsAriaPanel>
    </TabsAria>
  )
};


