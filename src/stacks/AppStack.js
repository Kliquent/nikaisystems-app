import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
	createStackNavigator,
	CardStyleInterpolators,
} from '@react-navigation/stack';
import { Octicons, Feather, AntDesign } from '@expo/vector-icons';
import {
	Home,
	Details,
	SurveyDetails,
	Profile,
	Notifications,
} from '../screens/app';

const HomeStackScreen = createStackNavigator();

export const HomeStack = ({ navigation }) => {
	return (
		<>
			<HomeStackScreen.Navigator
				screenOptions={{
					cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
					presentation: 'card', // modal
				}}
			>
				<HomeStackScreen.Screen
					headerMode="screen"
					name="HomeScreen"
					component={Home}
					options={{
						title: 'Home',
						headerRight: () => (
							<View style={{ flexDirection: 'row' }}>
								<Feather
									name="bell"
									size={20}
									style={{ paddingHorizontal: 15 }}
									color="#000"
									onPress={() => navigation.navigate('Notifications')}
								/>
							</View>
						),
					}}
				/>
				<HomeStackScreen.Screen
					headerMode="screen"
					name="SurveyDetails"
					cardStyle={{ zIndex: 1000 }}
					component={SurveyDetails}
					options={{
						title: 'Current Survey',
						headerLeft: () => (
							<AntDesign
								name="close"
								size={24}
								style={{ paddingHorizontal: 15 }}
								color="#000"
								onPress={() => navigation.goBack()}
							/>
						),
					}}
				/>
				<HomeStackScreen.Screen
					name="Notifications"
					component={Notifications}
					options={{
						headerLeft: () => (
							<AntDesign
								name="close"
								size={24}
								style={{ paddingHorizontal: 15 }}
								color="#000"
								onPress={() => navigation.goBack()}
							/>
						),
					}}
				/>
			</HomeStackScreen.Navigator>
		</>
	);
};
