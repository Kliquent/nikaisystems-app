import React, { createRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	StyleSheet,
	SafeAreaView,
	ScrollView,
	Platform,
	View,
	Text,
	Dimensions,
	Image,
	TouchableOpacity,
} from 'react-native';
import ActionSheet from 'react-native-actions-sheet';

const actionSheetRef = createRef();

const { width, height } = Dimensions.get('screen');

const sheet_height_ios = height * 0.8;
const sheet_height_android = height * 0.75;

const Home = ({ navigation }) => {
	// let authUser = useSelector((state) => state?.auth?.user);

	const openSurveyDetails = () => {
		actionSheetRef.current?.setModalVisible(false);
		navigation.navigate('SurveyDetails');
	};
	return (
		<>
			<ActionSheet
				bottomOffset={50}
				bounceOnOpen
				containerStyle={{ borderTopLeftRadius: 30, borderTopRightRadius: 30 }}
				gestureEnabled
				indicatorColor="#f3f3f3"
				overlayColor="gray"
				defaultOverlayOpacity={0.5}
				bounciness={5}
				ref={actionSheetRef}
			>
				<View
					style={{
						height:
							Platform.OS === 'ios' ? sheet_height_ios : sheet_height_android,
						padding: '5%',
					}}
				>
					<View>
						<Text style={{ fontSize: 20, fontWeight: '600' }}>
							Product Launch
						</Text>
						<View
							style={{
								marginTop: 5,
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'flex-start',
							}}
						>
							<Text style={{ color: 'gray', paddingRight: 38 }}>Host</Text>
							<Text style={{ fontSize: 18 }}>Great Research</Text>
						</View>
						<View
							style={{
								marginTop: 5,
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'flex-start',
							}}
						>
							<Text style={{ color: 'gray' }}>Category</Text>
							<Text style={{ fontSize: 18, paddingLeft: 10 }}>Marketing</Text>
						</View>
					</View>
					<View
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							marginTop: 10,
							width: '100%',
						}}
					>
						<TouchableOpacity
							style={styles.startSurveyButton}
							onPress={openSurveyDetails}
						>
							<Text style={{ color: '#fff', fontSize: 16 }}>Start Survey</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ActionSheet>
			<SafeAreaView style={styles.container}>
				<ScrollView
					style={{ paddingHorizontal: 20, marginBottom: 95, paddingBottom: 5 }}
					showsVerticalScrollIndicator={false}
				>
					<Text style={styles.textGreetings}>Hey, User!</Text>
					<Text style={styles.textTitle}>Pick Best Survey For You</Text>
					<Text style={styles.textSubtitle}>Existing Survey</Text>
					<View style={styles.surveyContainer}>
						<View style={{ width: '35%' }}>
							<Image
								source={require('../../../assets/survey.png')}
								style={styles.image}
							/>
						</View>
						<View style={[styles.surveyContent, { width: '65%' }]}>
							<View style={styles.surveyCategory}>
								<Text style={{ color: '#fff', fontSize: 12 }}>Marketing</Text>
							</View>
							<Text
								style={{ fontWeight: 'bold', fontSize: 15, paddingVertical: 3 }}
							>
								Product Launch Survey
							</Text>
							<Text style={{ color: 'gray', fontSize: 12 }}>
								Easy Payment & Gift Card
							</Text>
							<View style={{ alignItems: 'center', width: '80%' }}>
								<TouchableOpacity
									style={styles.surveyButton}
									onPress={() => actionSheetRef.current?.setModalVisible()}
								>
									<Text style={{ color: '#fff' }}>View survey</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={styles.surveyContainer}>
						<View style={{ width: '35%' }}>
							<Image
								source={require('../../../assets/survey.png')}
								style={styles.image}
							/>
						</View>
						<View style={[styles.surveyContent, { width: '65%' }]}>
							<View style={styles.surveyCategory}>
								<Text style={{ color: '#fff', fontSize: 12 }}>Marketing</Text>
							</View>
							<Text
								style={{ fontWeight: 'bold', fontSize: 15, paddingVertical: 3 }}
							>
								Product Launch Survey
							</Text>
							<Text style={{ color: 'gray', fontSize: 12 }}>
								Easy Payment & Gift Card
							</Text>
							<View style={{ alignItems: 'center', width: '80%' }}>
								<TouchableOpacity
									style={styles.surveyButton}
									onPress={() => actionSheetRef.current?.setModalVisible()}
								>
									<Text style={{ color: '#fff' }}>View survey</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={styles.surveyContainer}>
						<View style={{ width: '35%' }}>
							<Image
								source={require('../../../assets/survey.png')}
								style={styles.image}
							/>
						</View>
						<View style={[styles.surveyContent, { width: '65%' }]}>
							<View style={styles.surveyCategory}>
								<Text style={{ color: '#fff', fontSize: 12 }}>Marketing</Text>
							</View>
							<Text
								style={{ fontWeight: 'bold', fontSize: 15, paddingVertical: 3 }}
							>
								Product Launch Survey
							</Text>
							<Text style={{ color: 'gray', fontSize: 12 }}>
								Easy Payment & Gift Card
							</Text>
							<View style={{ alignItems: 'center', width: '80%' }}>
								<TouchableOpacity
									style={styles.surveyButton}
									onPress={() => actionSheetRef.current?.setModalVisible()}
								>
									<Text style={{ color: '#fff' }}>View survey</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={styles.surveyContainer}>
						<View style={{ width: '35%' }}>
							<Image
								source={require('../../../assets/survey.png')}
								style={styles.image}
							/>
						</View>
						<View style={[styles.surveyContent, { width: '65%' }]}>
							<View style={styles.surveyCategory}>
								<Text style={{ color: '#fff', fontSize: 12 }}>Marketing</Text>
							</View>
							<Text
								style={{ fontWeight: 'bold', fontSize: 15, paddingVertical: 3 }}
							>
								Product Launch Survey
							</Text>
							<Text style={{ color: 'gray', fontSize: 12 }}>
								Easy Payment & Gift Card
							</Text>
							<View style={{ alignItems: 'center', width: '80%' }}>
								<TouchableOpacity
									style={styles.surveyButton}
									onPress={() => actionSheetRef.current?.setModalVisible()}
								>
									<Text style={{ color: '#fff' }}>View survey</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
					<View style={styles.surveyContainer}>
						<View style={{ width: '35%' }}>
							<Image
								source={require('../../../assets/survey.png')}
								style={styles.image}
							/>
						</View>
						<View style={[styles.surveyContent, { width: '65%' }]}>
							<View style={styles.surveyCategory}>
								<Text style={{ color: '#fff', fontSize: 12 }}>Marketing</Text>
							</View>
							<Text
								style={{ fontWeight: 'bold', fontSize: 15, paddingVertical: 3 }}
							>
								Product Launch Survey
							</Text>
							<Text style={{ color: 'gray', fontSize: 12 }}>
								Easy Payment & Gift Card
							</Text>
							<View style={{ alignItems: 'center', width: '80%' }}>
								<TouchableOpacity
									style={styles.surveyButton}
									onPress={() => actionSheetRef.current?.setModalVisible()}
								>
									<Text style={{ color: '#fff' }}>View survey</Text>
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</>
	);
};

export default Home;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	textGreetings: {
		marginTop: 20,
		color: 'gray',
		fontSize: 20,
	},
	textTitle: {
		marginTop: 15,
		paddingTop: 5,
		width: 230,
		fontSize: 30,
		fontWeight: '700',
		textAlign: 'left',
	},
	textSubtitle: {
		marginTop: 15,
		paddingTop: 5,
		fontSize: 15,
		fontWeight: 'bold',
		color: 'gray',
	},
	surveyContainer: {
		padding: 1,
		marginTop: 10,
		flexDirection: 'row',
		borderRadius: 10,
		width: width * 0.9,
		height: 130,
		...Platform.select({
			ios: {
				shadowColor: 'gray',
				shadowOffset: {
					width: 0,
					height: 2,
				},
				shadowOpacity: 0.25,
				shadowRadius: 3.5,
			},
			android: {
				elevation: -5, // its negative to allow effective box shadow
				position: 'relative',
				borderWidth: 1,
				borderColor: '#f3f3f3',
				zIndex: 50,
			},
		}),

		backgroundColor: 'white',
	},
	surveyCategory: {
		alignItems: 'center',
		width: 80,
		padding: 3,
		backgroundColor: '#f4338f',
		borderRadius: 50,
	},
	surveyContent: {
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	surveyButton: {
		alignItems: 'center',
		width: 95,
		marginTop: 5,
		padding: 8,
		backgroundColor: '#0052ff',
		borderRadius: 50,
	},
	startSurveyButton: {
		alignItems: 'center',
		width: '100%',
		marginTop: 5,
		padding: 15,
		backgroundColor: '#0052ff',
		borderRadius: 50,
	},
	image: {
		resizeMode: 'contain',
		justifyContent: 'flex-start',
		width: '90%',
		height: '100%',
	},
});
