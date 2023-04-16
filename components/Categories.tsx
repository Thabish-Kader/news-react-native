import { FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../theme";

const categories = [
	"business",
	"entertainment",
	"general",
	"health",
	"science",
	"sports",
	"technology",
];
export const Categories = () => {
	return (
		<View>
			<FlatList
				style={styles.list}
				data={categories}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.button}
						// TODO: create function to push to the differnt page
						onPress={() => console.log(item)}
					>
						<Text style={styles.text}>{item}</Text>
					</TouchableOpacity>
				)}
				horizontal
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {},
	button: {
		paddingHorizontal: 6,
		padding: 2,
	},
	text: {
		fontWeight: "bold",
		textTransform: "capitalize",
		backgroundColor: COLORS.grey[50],
		padding: 10,
		borderColor: COLORS.zinc[900],
		borderWidth: 1,
		borderRadius: 10,
	},
});
