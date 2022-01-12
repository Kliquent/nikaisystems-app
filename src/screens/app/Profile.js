import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Profile = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>Profile Screen</Text>
		</View>
	);
};

export default Profile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 30,
	},
});
