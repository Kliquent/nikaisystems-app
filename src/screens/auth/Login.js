import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import OnBoarding from '../../components/OnBoarding';

const Login = () => {
	return (
		<View style={styles.container}>
			<OnBoarding />
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
