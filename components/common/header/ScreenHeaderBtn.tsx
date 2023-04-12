import React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";

type ScreenHeaderBtnProps = {
	iconUrl: ImageData;
	dimension: string;
};
const ScreenHeaderBtn = ({ iconUrl, dimension }: ScreenHeaderBtnProps) => {
	return (
		<TouchableOpacity style={styles.btnContainer}>
			<Image
				source={iconUrl}
				resizeMode="cover"
				style={styles.btnImg(dimension)}
			/>
		</TouchableOpacity>
	);
};

export default ScreenHeaderBtn;
