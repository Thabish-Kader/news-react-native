import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import React from "react";

const Layout = () => {
	const queryClinet = new QueryClient();
	return (
		<QueryClientProvider client={queryClinet}>
			<Stack />
		</QueryClientProvider>
	);
};

export default Layout;
