import { combineReducers } from "redux";
import { profileReducer } from "../reducers/profileReducer";
import { myFirstReducer } from "../reducers/reducerSaga";

const allReducers = combineReducers({
    allProfiles: profileReducer, myFirstReducer
});

export default allReducers;