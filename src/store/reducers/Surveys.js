import {
	GET_SURVEY,
	SURVEY_LOADING,
	CURRENT_SURVEY_QUIZ,
	CLEAR_CURRENT_SURVEY,
	SURVEY_ERROR,
} from '../actions/Types';

const initialState = {
	isAuthenticated: null,
	surveys: null,
	currentSurveyQuiz: null,
};

export default function SurveyReducer(state = initialState, action) {
	switch (action.type) {
		case SURVEY_LOADING:
			return {
				...state,
				isLoading: true,
			};
		case GET_SURVEY:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				surveys: action.payload,
			};
		case CURRENT_SURVEY_QUIZ:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				currentSurveyQuiz: action.payload,
			};
		case CLEAR_CURRENT_SURVEY:
			return {
				...state,
				isAuthenticated: true,
				isLoading: false,
				currentSurveyQuiz: null,
			};
		case SURVEY_ERROR:
			return {
				...state,
				isAuthenticated: true,
				surveys: null,
				isLoading: false,
			};
		default:
			return state;
	}
}
