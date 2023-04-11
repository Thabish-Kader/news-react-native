import { StyleSheet, StyleProp, ViewStyle, TextStyle } from "react-native";

import { COLORS, SHADOWS, SIZES } from "../../../constants";

interface Styles {
	container: ViewStyle;
	btn: (name: string, activeTab: string) => StyleProp<ViewStyle>;
	btnText: (name: string, activeTab: string) => StyleProp<TextStyle>;
}

const styles = StyleSheet.create<Styles | any>({
	container: {
		marginTop: SIZES.small,
		marginBottom: SIZES.small / 2,
	},
	btn: (name: string, activeTab: string): StyleProp<ViewStyle> => ({
		paddingVertical: SIZES.medium,
		paddingHorizontal: SIZES.xLarge,
		backgroundColor: name === activeTab ? COLORS.primary : "#F3F4F8",
		borderRadius: SIZES.medium,
		marginLeft: 2,
		...SHADOWS.medium,
		shadowColor: COLORS.white,
	}),
	btnText: (name: string, activeTab: string): StyleProp<TextStyle> => ({
		fontFamily: "DMMedium",
		fontSize: SIZES.small,
		color: name === activeTab ? "#C3BFCC" : "#AAA9B8",
	}),
});

export default styles;
