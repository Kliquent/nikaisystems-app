import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	SafeAreaView,
	StatusBar,
	Dimensions,
	Image,
	TouchableOpacity,
	Modal,
	Animated,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { COLORS, SIZES } from '../../constants';
import data from '../../../data';
import { styles } from '../auth/styles';
import TextInputAvoidingView from '../../components/KeyboardAvoiding';
import {
	Checkbox,
	RadioButton,
	TextInput,
	HelperText,
} from 'react-native-paper';

const { height } = Dimensions.get('screen');

const SurveyDetails = () => {
	const dispatch = useDispatch();
	const allQuestions = data;
	let surveyQuiz = useSelector((state) => state.surveys);

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [selectedOption, setSelectedOption] = useState(false);
	const [showNextButton, setShowNextButton] = useState(false);
	const [showFormModal, setShowFormModal] = useState(false);
	const [showCompleteModal, setShowCompleteModal] = useState(false);
	const [progress, setProgress] = useState(new Animated.Value(0));

	const progressAnim = progress.interpolate({
		inputRange: [0, surveyQuiz?.currentSurveyQuiz.length],
		outputRange: ['0%', '100%'],
	});

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onBlur' });

	const validateAnswer = (option) => {
		setSelectedOption(option);

		// Body params
		const body = {
			surveyee_id: '',
			question_id: surveyQuiz?.currentSurveyQuiz[currentQuestionIndex]?.id,
			option_id: option.id,
			option_title: option.title,
		};

		console.log(body);

		// dispatch redux

		// Show Next Button
		setShowNextButton(true);
	};

	const handleNext = () => {
		if (currentQuestionIndex == surveyQuiz?.currentSurveyQuiz?.length - 1) {
			// Last Question
			// Show Score Modal
			setShowCompleteModal(true);
		} else {
			setCurrentQuestionIndex(currentQuestionIndex + 1);
			setShowNextButton(false);
		}
		Animated.timing(progress, {
			toValue: currentQuestionIndex + 1,
			duration: 1000,
			useNativeDriver: false,
		}).start();
	};

	const restartQuiz = () => {
		setShowCompleteModal(false);
		setShowFormModal(true);
		setCurrentQuestionIndex(0);
		setShowNextButton(false);
		Animated.timing(progress, {
			toValue: 0,
			duration: 1000,
			useNativeDriver: false,
		}).start();
	};

	const renderQuestion = () => {
		return (
			<View
				style={{
					marginVertical: 10,
				}}
			>
				{/* Question Counter */}
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'flex-end',
					}}
				>
					<Text
						style={{
							color: COLORS.white,
							fontSize: 20,
							opacity: 0.6,
							marginRight: 2,
						}}
					>
						{currentQuestionIndex + 1}
					</Text>
					<Text style={{ color: COLORS.white, fontSize: 18, opacity: 0.6 }}>
						/ {surveyQuiz?.currentSurveyQuiz?.length}
					</Text>
				</View>

				{/* Question */}
				<Text
					style={{
						color: COLORS.white,
						fontSize: 25,
					}}
				>
					{surveyQuiz?.currentSurveyQuiz[currentQuestionIndex]?.title}
				</Text>
			</View>
		);
	};

	const renderOptions = () => {
		return (
			<View style={{ height: height * 0.36 }}>
				<ScrollView showsVerticalScrollIndicator={false}>
					{surveyQuiz?.currentSurveyQuiz[currentQuestionIndex]?.options?.map(
						(option) => {
							const { id, question_id, title, description } = option;
							return (
								<Fragment key={id}>
									{surveyQuiz?.currentSurveyQuiz[currentQuestionIndex]
										?.input_type?.name == 'CheckBoxes' ? (
										<Checkbox.Item
											labelStyle={{ color: '#fff' }}
											label={title}
											status={
												id === selectedOption.id ? 'checked' : 'indeterminate'
											}
											onPress={() => {
												validateAnswer(option);
											}}
										/>
									) : (
										<RadioButton.Group>
											<RadioButton.Item
												status={
													id === selectedOption.id ? 'checked' : 'unchecked'
												}
												onPress={() => {
													validateAnswer(option);
												}}
												value={option.title}
												label={title}
												labelStyle={{ color: '#fff' }}
											/>
										</RadioButton.Group>
									)}
								</Fragment>
							);
						}
					)}
				</ScrollView>
			</View>
		);
	};

	const renderNextButton = () => {
		if (showNextButton) {
			return (
				<TouchableOpacity
					onPress={handleNext}
					style={{
						marginTop: 5,
						width: '100%',
						backgroundColor: '#7CC89A',
						padding: 20,
						borderRadius: 50,
					}}
				>
					<Text
						style={{ fontSize: 20, color: COLORS.white, textAlign: 'center' }}
					>
						Next
					</Text>
				</TouchableOpacity>
			);
		} else {
			return null;
		}
	};

	const renderProgressBar = () => {
		return (
			<View
				style={{
					width: '100%',
					height: 20,
					borderRadius: 20,
					backgroundColor: '#00000020',
				}}
			>
				<Animated.View
					style={[
						{
							height: 20,
							borderRadius: 20,
							backgroundColor: '#7CC89A',
						},
						{
							width: progressAnim,
						},
					]}
				></Animated.View>
			</View>
		);
	};

	const onSubmit = () => {};

	return (
		<SafeAreaView
			style={{
				flex: 1,
			}}
		>
			<View
				style={{
					flex: 1,
					paddingVertical: 40,
					paddingHorizontal: 16,
					backgroundColor: '#838084',
					position: 'relative',
				}}
			>
				<StatusBar barStyle="default" backgroundColor={COLORS.primary} />

				{/* ProgressBar */}
				{renderProgressBar()}

				{/* Question */}
				{renderQuestion()}

				{/* Options */}
				{renderOptions()}

				{/* Next Button */}
				{renderNextButton()}

				{/* Surveyee Form Modal */}
				<Modal animationType="slide" transparent={true} visible={showFormModal}>
					<TextInputAvoidingView>
						<View
							style={{
								flex: 1,
								backgroundColor: '#838084',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<View style={styles.inputFormContainer}>
								<Text
									style={{
										fontSize: 20,
										fontWeight: 'bold',
										textAlign: 'center',
									}}
								>
									SURVEYEE FORM
								</Text>
								<Controller
									control={control}
									name="first_name"
									render={({ field: { onChange, value, onBlur } }) => (
										<TextInput
											mode="outlined"
											autoFocus={Platform.OS === 'ios' ? true : false}
											label="First Name"
											placeholder="Enter your First Name"
											value={value}
											theme={{
												colors: {
													primary: '#7CC89A',
													underlineColor: 'transparent',
												},
											}}
											onBlur={onBlur}
											onChangeText={(value) => onChange(value)}
										/>
									)}
									rules={{
										required: {
											value: true,
											message: 'First name is required',
										},
									}}
								/>
								<HelperText type="error" style={styles.helper}>
									{errors?.first_name?.message}
								</HelperText>
								<Controller
									control={control}
									name="last_name"
									render={({ field: { onChange, value, onBlur } }) => (
										<TextInput
											mode="outlined"
											label="Last Name"
											placeholder="Enter your Last Name"
											value={value}
											theme={{
												colors: {
													primary: '#7CC89A',
													underlineColor: 'transparent',
												},
											}}
											onBlur={onBlur}
											onChangeText={(value) => onChange(value)}
										/>
									)}
									rules={{
										required: {
											value: true,
											message: 'Last name is required',
										},
									}}
								/>
								<HelperText type="error" style={styles.helper}>
									{errors?.last_name?.message}
								</HelperText>

								<TouchableOpacity
									onPress={() => setShowFormModal(false)}
									style={{
										marginTop: 10,
										width: '100%',
										backgroundColor: '#7CC89A',
										padding: 20,
										borderRadius: 50,
									}}
								>
									<Text
										style={{
											fontSize: 20,
											color: COLORS.white,
											textAlign: 'center',
										}}
									>
										Cancel
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</TextInputAvoidingView>
				</Modal>

				{/* Complete Modal */}
				<Modal
					animationType="slide"
					transparent={true}
					visible={showCompleteModal}
				>
					<View
						style={{
							flex: 1,
							backgroundColor: '#838084',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<View
							style={{
								backgroundColor: COLORS.white,
								width: '90%',
								borderRadius: 20,
								padding: 20,
								alignItems: 'center',
							}}
						>
							<Text style={{ fontSize: 30, fontWeight: 'bold' }}>
								{surveyQuiz?.currentSurveyQuiz?.length >
								surveyQuiz?.currentSurveyQuiz?.length / 2
									? 'Congratulations!'
									: 'Oops!'}
							</Text>

							<View
								style={{
									flexDirection: 'row',
									justifyContent: 'flex-start',
									alignItems: 'center',
									marginVertical: 20,
								}}
							>
								<Text
									style={{
										fontSize: 30,
										color:
											surveyQuiz?.currentSurveyQuiz?.length >
											surveyQuiz?.currentSurveyQuiz?.length / 2
												? COLORS.success
												: COLORS.error,
									}}
								>
									{surveyQuiz?.currentSurveyQuiz?.length}
								</Text>
								<Text
									style={{
										fontSize: 20,
										color: COLORS.black,
									}}
								>
									/ {surveyQuiz?.currentSurveyQuiz?.length}
								</Text>
							</View>
							{/* Retry Quiz button */}
							<TouchableOpacity
								onPress={restartQuiz}
								style={{
									backgroundColor: '#7CC89A',
									padding: 20,
									width: '100%',
									borderRadius: 50,
								}}
							>
								<Text
									style={{
										textAlign: 'center',
										color: COLORS.white,
										fontSize: 20,
									}}
								>
									Restart Survey
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</Modal>

				{/* Background Image */}
				<Image
					source={{
						uri: 'https://raw.githubusercontent.com/RushikeshVidhate/react-native-quiz-app/master/app/assets/images/DottedBG.png',
					}}
					style={{
						width: SIZES.width,
						height: 130,
						zIndex: -1,
						position: 'absolute',
						bottom: 0,
						left: 0,
						right: 0,
						opacity: 0.5,
					}}
					resizeMode={'contain'}
				/>
			</View>
		</SafeAreaView>
	);
};

export default SurveyDetails;
