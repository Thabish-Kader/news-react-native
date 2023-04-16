import {
	FlatList,
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from "react-native";
import { Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../theme";
import { HeadLines } from "../components/HeadLines";
import { Categories } from "../components/Categories";
import { AllNews } from "../components/AllNews";
import { Feather } from "@expo/vector-icons";

const Home = () => {
	return (
		<SafeAreaView style={{ backgroundColor: COLORS.zinc[800] }}>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: COLORS.zinc[900],
					},
					headerShadowVisible: true,
					headerLeft: () => (
						<Feather
							onPress={() => console.log("Menu")}
							name="menu"
							size={24}
							color="white"
						/>
					),
					headerRight: () => (
						<MaterialCommunityIcons
							onPress={() => console.log("Search")}
							name="magnify"
							size={24}
							color="white"
						/>
					),
					headerTitle: "News",
					headerTintColor: "white",
				}}
			/>
			<ScrollView>
				<HeadLines />
				<Categories />

				<AllNews />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
