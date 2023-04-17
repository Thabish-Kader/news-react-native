import { useRouter, useSearchParams } from "expo-router";
import { RefreshControl, SafeAreaView, ScrollView } from "react-native";
import { Stack } from "expo-router";
import { COLORS } from "../../theme";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { mockData } from "../../testData";
import { useCallback, useState } from "react";
import { AllNews } from "../../components/AllNews";

const Category = () => {
	const router = useRouter();
	const { category } = useSearchParams();
	const [refreshing, setRefreshing] = useState(false);
	const [data, setData] = useState(mockData.articles);

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
	console.log(category);
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
				<AllNews news={data} />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Category;
