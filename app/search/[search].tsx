import {
	ActivityIndicator,
	RefreshControl,
	SafeAreaView,
	ScrollView,
	Text,
} from "react-native";
import { Stack, useNavigation, useSearchParams } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { COLORS } from "../../theme";
import { HeadLines } from "../../components/HeadLines";
import { Categories } from "../../components/Categories";
import { AllNews } from "../../components/AllNews";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useCallback, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { Search } from "../../components/Search";
import { fetchNewsBySearch } from "../../api/fetchNewsBySearch";

const SearchResult = () => {
	const [refreshing, setRefreshing] = useState(false);
	const nav = useNavigation();
	const { search } = useSearchParams();
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["searchResults"],
		queryFn: () => fetchNewsBySearch(search as string),
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
					headerTitle: `Search results for "${search}"`,
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
				<AllNews news={data} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default SearchResult;
