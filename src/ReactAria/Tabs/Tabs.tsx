import React from "react";
import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';
import "./Tabs.css";

export const TabsAria = ({ children, ...restProps }: React.ComponentProps<typeof Tabs>) => {
	return (
		<Tabs className="Tabs" {...restProps}>
			{children}
		</Tabs>
	)
}

export const TabsAriaHeaders = ({ children, ...restProps }: React.ComponentProps<typeof TabList>) => {
	return (
		<TabList className="TabsHeaders" {...restProps}>
			{children}
		</TabList>
	)
}

export const TabsAriaHeader = ({ children, ...restProps }: React.ComponentProps<typeof Tab>) => {
	return (
		<Tab className="TabsHeader" {...restProps}>
			{children}
		</Tab>
	)
}

export const TabsAriaPanel = ({ children, ...restProps }: React.ComponentProps<typeof TabPanel>) => {
	return (
		<TabPanel className="TabsPanel" {...restProps}>
			{children}
		</TabPanel>
	)
}
