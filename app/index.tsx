import {
	ActivityIndicator,
	RefreshControl,
	SafeAreaView,
	ScrollView,
	Text,
} from "react-native";
import { Stack, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { COLORS } from "../theme";
import { HeadLines } from "../components/HeadLines";
import { Categories } from "../components/Categories";
import { AllNews } from "../components/AllNews";
import { Feather } from "@expo/vector-icons";
import { useCallback, useState } from "react";
import { mockArticles } from "../testData";
import { fetchTopHeadlines } from "../api/fetchTopHeadlines";

import { useQuery } from "@tanstack/react-query";
import { Search } from "../components/Search";

const Home = () => {
	const [refreshing, setRefreshing] = useState(false);

	const nav = useNavigation();

	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["topHeadlines"],
		queryFn: fetchTopHeadlines,
	});

	const onRefresh = useCallback(async () => {
		setRefreshing(true);
		refetch().then(() => setRefreshing(false));
	}, []);

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
							onPress={() =>
								nav.dispatch(DrawerActions.openDrawer())
							}
							name="menu"
							size={24}
							color="white"
							style={{ paddingLeft: 20 }}
						/>
					),
					headerRight: () => <Search />,
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
				<HeadLines topHeadline={data[0]} />
				<Categories />
				<AllNews news={data} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Home;
