import { Stack, useRouter, useSearchParams } from "expo-router";
import {
	ActivityIndicator,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from "react-native";
import useFetch from "../../hook/useFetch";
import { COLORS, SIZES, icons } from "../../constants";
import {
	Company,
	JobAbout,
	JobTabs,
	ScreenHeaderBtn,
	Specifics,
} from "../../components";
import { RefreshControl } from "react-native-gesture-handler";
import { useState } from "react";

const tabs = ["About", "Qualification", "Responsibilities"];

const JobDetails = () => {
	const params = useSearchParams();
	const router = useRouter();
	const { data, error, isLoading, refetch } = useFetch("job-details", {
		job_id: params.id,
	});
	const [refreshing, setRefreshing] = useState(false);
	const [activeTab, setActiveTab] = useState(tabs[0]);
	const onRefresh = () => {};

	const displayToContent = () => {
		switch (activeTab) {
			case "About":
				return (
					<JobAbout
						info={data[0].job_description ?? "No data provided"}
					/>
				);
			case "Qualification":
				return (
					<Specifics
						title="Qualification"
						points={
							data[0].job_highlights?.Qualifications ?? ["N/A"]
						}
					/>
				);
			case "Responsibilities":
				return (
					<Specifics
						title="Responsibilities"
						points={
							data[0].job_highlights?.Responsibilities ?? ["N/A"]
						}
					/>
				);
			default:
				break;
		}
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
			<Stack.Screen
				options={{
					headerStyle: { backgroundColor: COLORS.lightWhite },
					headerShadowVisible: false,
					headerBackVisible: false,
					headerLeft: () => (
						<ScreenHeaderBtn
							iconUrl={icons.left}
							dimension="60%"
							handlePress={() => router.back()}
						/>
					),
					headerRight: () => (
						<ScreenHeaderBtn
							iconUrl={icons.share}
							dimension="60%"
						/>
					),
					headerTitle: "",
				}}
			/>
			<ScrollView
				showsVerticalScrollIndicator={false}
				refreshControl={
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				}
			>
				{isLoading ? (
					<ActivityIndicator size="large" color={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : data?.length === 0 ? (
					<Text>No data available</Text>
				) : (
					<View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
						<Company
							companyLogo={data[0]?.employer_logo}
							jobTitle={data[0]?.job_title}
							companyName={data[0]?.employer_name}
							location={data[0]?.job_country}
						/>

						<JobTabs
							tabs={tabs}
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						{displayToContent()}
					</View>
				)}
			</ScrollView>
		</SafeAreaView>
	);
};

export default JobDetails;
