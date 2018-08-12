import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import CurrentReducer from './currentReducer';
import historyReducer from './historyReducer';


export default combineReducers({
    auth: AuthReducer,
    crnt: CurrentReducer,
    hrst: historyReducer
});