import { FlatList, Image, SafeAreaView, ScrollView, Text } from "react-native";
import { Stack } from "expo-router";
import { HeaderBtn } from "../components/HeaderBtn";
import search from "./assets/search.png";
import menu from "./assets/menu.png";
import { COLORS } from "../theme";
import { HeadLines } from "../components/HeadLines";
import { Categories } from "../components/Categories";

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
			<ScrollView style={{}}>
				<HeadLines />
				<Categories />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
