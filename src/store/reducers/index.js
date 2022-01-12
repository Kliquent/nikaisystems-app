import { combineReducers } from 'redux';
import auth from './Auth';
import error from './Error';

export default combineReducers({
	auth,
	error,
});
