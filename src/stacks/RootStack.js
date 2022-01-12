import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppTabStack from './AppTabStack';

const RootStack = () => {
	const [auth, setAuth] = useState(false);
	return (
		<NavigationContainer>
			{auth ? <AppTabStack /> : <AuthStack />}
		</NavigationContainer>
	);
};

export default RootStack;
