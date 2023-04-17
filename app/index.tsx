import {
	ActivityIndicator,
	RefreshControl,
	SafeAreaView,
	ScrollView,
	Text,
} from "react-native";
import { Stack } from "expo-router";
import { COLORS } from "../theme";
import { HeadLines } from "../components/HeadLines";
import { Categories } from "../components/Categories";
import { AllNews } from "../components/AllNews";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import { mockArticles } from "../testData";
import { fetchTopHeadlines } from "../api/fetchTopHeadlines";
import { Article } from "../typeings";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
	const [refreshing, setRefreshing] = useState(false);
	const { data, isLoading, error } = useQuery({
		queryKey: ["topHeadlines"],
		queryFn: fetchTopHeadlines,
	});

	// const onRefresh = useCallback(async () => {
	// 	setRefreshing(true);
	// 	const newNews = await fetchTopHeadlines();
	// 	setRefreshing(false);
	// }, []);

	if (isLoading) return <ActivityIndicator />;
	if (error) return <Text>Something went wrong </Text>;

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
						// onRefresh={onRefresh}
					/>
				}
			>
				<HeadLines topHeadline={data[0]} />
				<Categories />
				<AllNews news={data} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
