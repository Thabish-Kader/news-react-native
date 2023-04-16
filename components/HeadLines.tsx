import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONT_SIZE } from "../theme";

export const HeadLines = () => {
	return (
		<TouchableOpacity style={styles.container}>
			<Image
				style={styles.img}
				source={{
					uri: "https://ichef.bbci.co.uk/news/1024/branded_news/B608/production/_129300664_mediaitem129300662.jpg",
				}}
				resizeMode="cover"
			/>
			<Text style={styles.text}>
				Japan army helicopter wreckage found with five bodies
			</Text>
			<Text style={styles.author}>
				Author : <Text style={styles.broacaster}>BBC</Text>
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		shadowOffset: { width: 1, height: 3 },
		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowRadius: 3,
		backgroundColor: COLORS.grey[100],
		width: "100%",
		marginBottom: 5,
		borderRadius: 5,
	},
	img: {
		height: 200,
		alignSelf: "stretch",
	},
	text: {
		padding: 4,
		fontWeight: "bold",
		fontSize: FONT_SIZE["text-2xl"],
	},
	author: {
		fontSize: FONT_SIZE["text-sm"],
		padding: 4,
		fontStyle: "italic",
	},
	broacaster: {
		fontWeight: "bold",
		color: COLORS.red[500],
	},
});
