import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { Drawer } from "../components/Drawer";

const categories = [
	{ name: "business", label: "Business" },
	{ name: "general", label: "General" },
	{ name: "health", label: "Health" },
	{ name: "entertainment", label: "Entertainment" },
	{ name: "technology", label: "Technology" },
	// Add more categories here
];

const Layout = () => {
	const queryClinet = new QueryClient();

	return (
		<QueryClientProvider client={queryClinet}>
			{/* <Stack /> */}
			<Drawer>
				<Drawer.Screen
					name="index" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "Home",
						title: "overview",
					}}
				/>
				<Drawer.Screen
					name="news/[category]" // This is the name of the page and must match the url from root
					options={{
						drawerLabel: "Business",
						title: "Business",
					}}
					initialParams={{ category: "business" }}
				/>
			</Drawer>
		</QueryClientProvider>
	);
};

export default Layout;
