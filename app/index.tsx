import {
	FlatList,
	Image,
	RefreshControl,
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
import { useCallback, useState } from "react";
import { mockData } from "../testData";

const Home = () => {
	const [refreshing, setRefreshing] = useState(false);
	const [data, setData] = useState(mockData.articles);

	// const onRefresh = useCallback(async () => {

	const onRefresh = useCallback(async () => {
		setRefreshing(true);
		if (data.length < 10) {
			try {
				let response = await fetch("");
				let responseJson = await response.json();
				console.log(responseJson);
				setData(responseJson.result.concat(data));
				setRefreshing(false);
			} catch (error) {
				console.error(error);
			}
		}
	}, []);

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
			<ScrollView
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				<HeadLines />
				<Categories />

				<AllNews />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
