import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { mockData } from "../testData";
import { COLORS, FONT_SIZE } from "../theme";

import { TouchableOpacity } from "react-native-gesture-handler";

export const AllNews = () => {
	return (
		<View>
			<FlatList
				data={mockData.articles}
				renderItem={({ item }) => (
					<TouchableOpacity style={styles.listContainer}>
						<Image
							style={styles.img}
							source={{ uri: item.urlToImage }}
							resizeMode="cover"
						/>
						<View style={styles.articleInfoContainer}>
							<Text style={styles.title}>{item.title}</Text>
							<View style={styles.articleAuthorContainer}>
								<Text style={styles.author}>
									Author : {item.author}
								</Text>
								<Text style={styles.date}>
									{new Date(item.publishedAt).toDateString()}
								</Text>
							</View>
						</View>
					</TouchableOpacity>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	listContainer: {
		flexDirection: "row",
		padding: 4,
		gap: 6,
	},
	img: {
		height: 100,
		width: 100,
		borderRadius: 10,
	},
	articleInfoContainer: {
		backgroundColor: COLORS.grey[100],
		flex: 1,
		flexDirection: "column",
		padding: 4,
		borderRadius: 10,
	},
	title: {
		fontWeight: "bold",
		fontSize: FONT_SIZE["text-sm"],
		paddingHorizontal: 2,
	},
	articleAuthorContainer: {
		marginTop: "auto",
		fontStyle: "italic",
	},
	author: {
		fontWeight: "500",
	},
	date: {
		fontSize: FONT_SIZE["text-xs"],
		color: COLORS.grey[600],
	},
});
