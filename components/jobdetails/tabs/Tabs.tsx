import React from "react";
import { View, Text, FlatList } from "react-native";

import styles from "./tabs.style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SIZES } from "../../../constants";

type TabsProps = {
	tabs: string[];
	activeTab: string;
	setActiveTab: React.Dispatch<React.SetStateAction<string>>;
};

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
	return (
		<TouchableOpacity
			style={styles.btn(name, activeTab)}
			onPress={onHandleSearchType}
		>
			<Text style={styles.btnText(name, activeTab)}>{name}</Text>
		</TouchableOpacity>
	);
};

const Tabs = ({ tabs, activeTab, setActiveTab }: TabsProps) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={tabs}
				renderItem={({ item }) => (
					<TabButton
						name={item}
						activeTab={activeTab}
						onHandleSearchType={() => setActiveTab(item)}
					/>
				)}
				horizontal
				showsHorizontalScrollIndicator={false}
				keyExtractor={(item) => item}
				contentContainerStyle={{ columnGap: SIZES.small / 2 }}
			/>
		</View>
	);
};

export default Tabs;
