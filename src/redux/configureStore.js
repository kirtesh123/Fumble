import { combineReducers, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from "redux-saga";
import choiceReducer from "./ducks/choice";
import userReducer from "./ducks/user";
import { watcherSage } from './sagas/rootSaga';

const reducer = combineReducers({
    choice: choiceReducer,
    user: userReducer,
})

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(reducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSage);

export default store;