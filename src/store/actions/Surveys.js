import axios from 'axios';
import Toast from 'react-native-toast-message';
import { save, getValueFor } from '../../utils/secureStore';
import {
	SURVEY_LOADING,
	GET_SURVEY,
	CURRENT_SURVEY_QUIZ,
	CLEAR_CURRENT_SURVEY,
} from './Types';
import { returnErrors, clearErrors, surveyError } from './Error';
import { NIKIAI_URL } from '../Config';

// Setup config headers and token
export const tokenConfig = async () => {
	// Get token from secureStore
	const token = await getValueFor('userToken');

	// Headers
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	// if token, add to headers
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`;
	}

	return config;
};

export const getSurveys = () => async (dispatch) => {
	const token = await tokenConfig();

	try {
		const response = await axios.get(`${NIKIAI_URL}/surveys`, token);
		const data = await response.data;
		// console.log(data);

		await dispatch({
			type: SURVEY_LOADING,
		});

		await dispatch({
			type: GET_SURVEY,
			payload: data,
		});
		dispatch(clearErrors());
	} catch (error) {
		dispatch(
			returnErrors(error.response.data, error.response.status, 'SURVEY_ERROR')
		);
		dispatch(surveyError());
	}
};

export const getCurrentSurveyQuiz = (payloadId) => async (dispatch) => {
	const token = await tokenConfig();

	try {
		const response = await axios.get(
			`${NIKIAI_URL}/surveys/${payloadId}`,
			token
		);
		const data = await response.data;

		await dispatch({
			type: SURVEY_LOADING,
		});

		if (data) {
			await dispatch({
				type: CURRENT_SURVEY_QUIZ,
				payload: data,
			});
		} else {
			await dispatch({
				type: CLEAR_CURRENT_SURVEY,
				payload: data,
			});
		}
	} catch (error) {
		dispatch(
			returnErrors(error.response.data, error.response.status, 'SURVEY_ERROR')
		);
		dispatch(surveyError());
	}
};
