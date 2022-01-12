import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';

const SurveyDetails = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.innerContainer}>
				<Text style={styles.text}>SurveyDetails Screen</Text>
			</View>
		</SafeAreaView>
	);
};

export default SurveyDetails;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	innerContainer: {
		flex: 1,
		marginBottom: 95,
		// backgroundColor: 'green',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
	},
	text: {
		fontSize: 30,
	},
});
