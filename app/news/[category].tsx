import { useRouter, useSearchParams } from "expo-router";
import {
	ActivityIndicator,
	RefreshControl,
	SafeAreaView,
	ScrollView,
	Text,
	StyleSheet,
	View,
} from "react-native";
import { Stack } from "expo-router";
import { COLORS } from "../../theme";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { useCallback, useState } from "react";

import { fetchNewsByCategory } from "../../api/fetchNewsByCategory";
import { useQuery } from "@tanstack/react-query";
import { mockSources } from "../../testData";
import { CategoryNews } from "../../components/CategoryNews";

const Category = () => {
	const router = useRouter();

	const { category } = useSearchParams();
	const [refreshing, setRefreshing] = useState(false);
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ["topCategory", category],
		queryFn: () => fetchNewsByCategory(category as string),
	});

	const onRefresh = useCallback(async () => {
		setRefreshing(true);
		refetch().then(() => setRefreshing(false));
	}, []);

	if (isLoading) return <ActivityIndicator />;
	if (error) return <Text>Something went wrong</Text>;

	return (
		<SafeAreaView style={{ backgroundColor: COLORS.zinc[800] }}>
			<Stack.Screen
				options={{
					headerStyle: {
						backgroundColor: COLORS.zinc[900],
					},
					headerShadowVisible: true,
					headerLeft: () => (
						<Ionicons
							onPress={() => router.back()}
							name="arrow-back"
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
					headerTitle: category as string,
					headerTintColor: "white",
				}}
			/>
			<View style={styles.container}>
				<ScrollView
					contentContainerStyle={styles.scrollView}
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh}
						/>
					}
				>
					<CategoryNews news={data} />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};
const styles = StyleSheet.create({
	container: {
		height: "100%",
		backgroundColor: COLORS.zinc[900],
	},
	scrollView: {
		flexGrow: 1,
	},
});
export default Category;
