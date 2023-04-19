import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { Drawer } from "../components/Drawer";
import { COLORS } from "../theme";

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
						drawerLabel: "General News",
						title: "General News",
						drawerStyle: { backgroundColor: COLORS.zinc[800] },
						drawerInactiveTintColor: "white",
					}}
					initialParams={{ category: "general" }}
				/>
				<Drawer.Screen
					name="search/[search]"
					options={{
						drawerLabel: "Search",
						title: "Search",
						drawerStyle: { backgroundColor: COLORS.zinc[800] },
						drawerInactiveTintColor: "white",
					}}
					initialParams={{ search: "sports" }}
				/>
			</Drawer>
		</QueryClientProvider>
	);
};

export default Layout;
