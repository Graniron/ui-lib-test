import React from "react";
import { Tab } from '@headlessui/react'
import "./Tabs.css";

export const TabsH = ({ children, ...restProps }: React.ComponentProps<typeof Tab.Group>) => {
	return (
		<Tab.Group className="Tabs" {...restProps}>
			{children}
		</Tab.Group>
	)
}

export const TabsHHeaders = ({ children, ...restProps }: React.ComponentProps<typeof Tab.List>) => {
	return (
		<Tab.List className="TabsHeaders" {...restProps}>
			{children}
		</Tab.List>
	)
}

export const TabsHHeader = ({ children, ...restProps }: React.ComponentProps<any>) => {
	return (
		<Tab className="TabsHeader" {...restProps}>
			{children}
		</Tab>
	)
}

export const TabsHPanels = ({ children, ...restProps }: React.ComponentProps<typeof Tab.Panels>) => {
	return (
		<Tab.Panels className="TabsPanels" {...restProps}>
			{children}
		</Tab.Panels>
	)
}

export const TabsHPanel = ({ children, ...restProps }: React.ComponentProps<typeof Tab.Panel>) => {
	return (
		<Tab.Panel className="TabsPanel" {...restProps}>
			{children}
		</Tab.Panel>
	)
}
