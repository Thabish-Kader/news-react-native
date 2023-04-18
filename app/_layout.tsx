import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { Drawer } from "../components/Drawer";
import { COLORS } from "../theme";

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
					name="index"
					options={{
						drawerLabel: "Home",
						title: "overview",
						drawerStyle: { backgroundColor: COLORS.zinc[800] },
						drawerInactiveTintColor: "white",
					}}
				/>
				<Drawer.Screen
					name="news/[category]"
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
