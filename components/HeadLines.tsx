import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, FONT_SIZE } from "../theme";
import { Article } from "../typeings";

type HeadLinesProps = {
	topHeadline: Article;
};

export const HeadLines = ({ topHeadline }: HeadLinesProps) => {
	return (
		<TouchableOpacity style={styles.container}>
			<Image
				style={styles.img}
				source={{
					uri:
						topHeadline.urlToImage === null
							? "https://cdn11.bigcommerce.com/s-1812kprzl2/images/stencil/original/products/426/5082/no-image__12882.1665668288.jpg?c=2"
							: topHeadline.urlToImage,
				}}
				resizeMode="cover"
			/>
			<Text style={styles.text}>{topHeadline.title}</Text>
			<Text style={styles.author}>
				Author :{" "}
				<Text style={styles.broacaster}>{topHeadline.author}</Text>
			</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
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
