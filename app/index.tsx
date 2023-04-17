import {
	ActivityIndicator,
	RefreshControl,
	SafeAreaView,
	ScrollView,
} from "react-native";
import { Stack } from "expo-router";
import { COLORS } from "../theme";
import { HeadLines } from "../components/HeadLines";
import { Categories } from "../components/Categories";
import { AllNews } from "../components/AllNews";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import { mockData } from "../testData";
import { NEWS_API_KEY } from "@env";
import { fetchTopHeadlines } from "../api";
import { Article, News } from "../typeings";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
	const [refreshing, setRefreshing] = useState(false);
	const [news, setNews] = useState<Article[]>();
	const { data, isLoading, error } = useQuery({
		queryKey: ["topHeadlines"],
		queryFn: fetchTopHeadlines,
	});

	const onRefresh = useCallback(async () => {
		setRefreshing(true);
		const newNews = await fetchTopHeadlines();
		setNews(newNews);
		setRefreshing(false);
	}, []);

	useEffect(() => {
		setNews(data);
	}, []);

	if (isLoading) return <ActivityIndicator />;

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
				<HeadLines topHeadline={news[0]} />
				<Categories />
				<AllNews news={news} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
