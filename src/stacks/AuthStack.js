import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Auth screens
import { Login } from '../screens/auth';

const AuthStackScreen = createStackNavigator();

const AuthStack = () => {
	return (
		<AuthStackScreen.Navigator screenOptions={{ headerShown: false }}>
			<AuthStackScreen.Screen name="Login" component={Login} />
		</AuthStackScreen.Navigator>
	);
};

export default AuthStack;
