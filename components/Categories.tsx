import { FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../theme";
import { useRouter } from "expo-router";

const categories = [
	"business",
	"general",
	"health",
	"science",
	"entertainment",
	"sports",
	"technology",
];
export const Categories = () => {
	const router = useRouter();
	return (
		<View>
			<FlatList
				style={styles.list}
				data={categories}
				keyExtractor={(item) => item}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={styles.button}
						onPress={() => router.push(`/news/${item}`)}
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
		paddingHorizontal: 7.5,
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
