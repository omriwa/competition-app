import { combineReducers } from 'redux';
//reducers
import scoreReducer from "./score";
import timerReducer from "./timer";

export default combineReducers(
    {
        score:scoreReducer,
        timer:timerReducer
    }
);