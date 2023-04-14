import React, { useState } from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";
import styles from "./nearbyjobs.style";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS, SIZES } from "../../../constants";
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import useFetch from "../../../hook/useFetch";
import { JobData } from "../../../typeings";

const Nearbyjobs = () => {
	const router = useRouter();
	const { data, isLoading, error } = useFetch("search", {
		query: "React developer",
		num_pages: 1,
	});

	const [selectedJob, setSelectedJob] = useState<any>();

	const handleCardPress = (item: JobData) => {
		router.push(`/job-details/${item.job_id}`);
		setSelectedJob(item.job_id);
	};

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Near by Jobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show All</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size="large" color={COLORS.primary} />
				) : error ? (
					<Text>Something went wrong</Text>
				) : (
					data?.map((job) => (
						<NearbyJobCard
							job={job}
							key={`nearby-job-${job?.job_id}`}
							handleNavigate={() =>
								router.push(`job-details/${job.job_id}`)
							}
						/>
					))
				)}
			</View>
		</View>
	);
};

export default Nearbyjobs;
