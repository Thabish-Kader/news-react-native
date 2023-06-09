import { Image, Text, TouchableOpacity, StyleSheet } from "react-native";

type HeaderBtnProps = {
	icon: ImageData;
};

export const HeaderBtn = ({ icon }: HeaderBtnProps) => {
	return (
		<TouchableOpacity style={styles.container}>
			<Image source={icon} style={styles.img} resizeMode="cover" />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		width: 40,
		height: 40,
	},
	img: {
		height: "60%",
		width: "60%",
	},
});
