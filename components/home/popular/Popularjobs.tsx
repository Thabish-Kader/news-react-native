import React from "react";
import { View, Text, ActivityIndicator, FlatList } from "react-native";

import styles from "./popularjobs.style";
import { useRouter } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
	const router = useRouter();
	const isLoading = false;
	const error = false;
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerTitle}>Popularjobs</Text>
				<TouchableOpacity>
					<Text style={styles.headerBtn}>Show All</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.cardsContainer}>
				{isLoading ? (
					<ActivityIndicator size="large" color={COLORS.primary} />
				) : error ? (
					<Text>Something wen wrong</Text>
				) : (
					<FlatList
						data={[1, 2, 3, 4, 5, 6]}
						renderItem={({ item }) => (
							<PopularJobCard item={item} />
						)}
					/>
				)}
			</View>
		</View>
	);
};

export default Popularjobs;
