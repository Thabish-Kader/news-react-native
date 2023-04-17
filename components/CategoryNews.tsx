import React from "react";
import { Source } from "../typeings";
import {
	View,
	FlatList,
	TouchableOpacity,
	Text,
	StyleSheet,
} from "react-native";
import { COLORS, FONT_SIZE } from "../theme";
import { useRouter } from "expo-router";

export const CategoryNews = ({ news }: { news: Source[] }) => {
	const router = useRouter();
	return (
		<View>
			{news?.map((item) => (
				<TouchableOpacity
					key={item.id}
					style={styles.listContainer}
					onPress={() => router.push(item.url)}
				>
					<View style={styles.articleInfoContainer}>
						<Text style={styles.names}>{item.name}</Text>
						<View style={styles.articleInfo}>
							<Text style={styles.description}>
								Author : {item.description}
							</Text>
							<Text style={styles.country}>
								Country : {item.country}
							</Text>
						</View>
					</View>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		flexDirection: "row",
		padding: 4,
		gap: 6,
	},
	articleInfoContainer: {
		backgroundColor: COLORS.grey[100],
		flex: 1,
		flexDirection: "column",
		padding: 4,
		borderRadius: 10,
	},
	articleInfo: {
		marginTop: "auto",
		fontStyle: "italic",
	},
	names: {
		fontWeight: "bold",
		fontSize: FONT_SIZE["text-md"],
		paddingHorizontal: 2,
	},
	description: {
		marginTop: 6,
		fontSize: FONT_SIZE["text-xs"],
		fontWeight: "500",
	},
	country: {
		marginTop: 4,
		fontSize: FONT_SIZE["text-xs"],
		color: COLORS.grey[600],
	},
});
