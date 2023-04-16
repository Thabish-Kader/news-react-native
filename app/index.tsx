import { Image, SafeAreaView, Text } from "react-native";
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
					headerLeft: () => <HeaderBtn icon={search} />,
					headerRight: () => <HeaderBtn icon={menu} />,
					headerTitle: "Newz",
				}}
			/>
		</SafeAreaView>
	);
};

export default Home;
