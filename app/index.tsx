import { Image, SafeAreaView, ScrollView, Text } from "react-native";
import { Stack } from "expo-router";
import { HeaderBtn } from "../components/HeaderBtn";
import search from "./assets/search.png";
import menu from "./assets/menu.png";
import { COLORS } from "../COLORS";

const Home = () => {
	return (
		<SafeAreaView>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: COLORS.red[500],
					},
					headerShadowVisible: true,
					headerLeft: () => <HeaderBtn icon={menu} />,
					headerRight: () => <HeaderBtn icon={search} />,
					headerTitle: "Newz",
				}}
			/>
			<ScrollView
				style={{ backgroundColor: COLORS.zinc[800] }}
			></ScrollView>
		</SafeAreaView>
	);
};

export default Home;
