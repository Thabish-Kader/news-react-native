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
						<View style={styles.container}>
							<Text style={styles.text}>{item}</Text>
						</View>
					</TouchableOpacity>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				contentContainerStyle={{ columnGap: 6 }}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	list: {},
	button: {
		paddingHorizontal: 2,
		paddingBottom: 2,
		borderWidth: 1,
		borderRadius: 5,
		backgroundColor: COLORS.grey[100],
	},
	container: {},
	text: {
		fontWeight: "bold",
		textTransform: "capitalize",
		padding: 10.5,
	},
});
