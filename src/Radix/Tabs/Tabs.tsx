import React from "react";
import * as TabsRadix from '@radix-ui/react-tabs';
import "./Tabs.css";

export const Tabs = ({ children, ...restProps }: React.ComponentProps<typeof TabsRadix.Root>) => {
	return (
		<TabsRadix.Root className="Tabs" {...restProps}>
			{children}
		</TabsRadix.Root>
	)
}

export const TabsHeaders = ({ children, ...restProps }: React.ComponentProps<typeof TabsRadix.List>) => {
	return (
		<TabsRadix.List className="TabsHeaders" {...restProps}>
			{children}
		</TabsRadix.List>
	)
}

export const TabsHeader = ({ children, ...restProps }: React.ComponentProps<typeof TabsRadix.Trigger>) => {
	return (
		<TabsRadix.Trigger className="TabsHeader" {...restProps}>
			{children}
		</TabsRadix.Trigger>
	)
}

export const TabsPanel = ({ children, ...restProps }: React.ComponentProps<typeof TabsRadix.Content>) => {
	return (
		<TabsRadix.Content className="TabsPanel" {...restProps}>
			{children}
		</TabsRadix.Content>
	)
}
