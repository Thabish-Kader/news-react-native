import React, { useState } from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export const Search = () => {
	const [search, setSearch] = useState("");
	const [toggle, setToggle] = useState(false);
	const router = useRouter();
	const searchPrompt = () => {
		if (toggle && search.length > 0) {
			router.push(`/search/${search}`);
		}
		setToggle(!toggle);
		setSearch("");
	};
	return (
		<View style={styles.container}>
			{toggle && (
				<TextInput
					style={styles.input}
					onChangeText={setSearch}
					value={search}
				/>
			)}
			<MaterialCommunityIcons
				onPress={searchPrompt}
				name="magnify"
				size={24}
				color="white"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,
		paddingRight: 20,
	},
	input: {
		width: "50%",
		height: 20,
		backgroundColor: "white",
		borderRadius: 10,
		paddingHorizontal: 4,
	},
});
