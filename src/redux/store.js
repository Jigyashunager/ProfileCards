import { createStore } from "redux";
import allReducers from './reducers/index';
import { applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import mySaga from "../sagas";

const sagaMiddleware = createSagaMiddleware();

const mystore = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);
export default mystore;