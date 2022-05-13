import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import getDataReducer from './Reducers/data';

const rootReducer = combineReducers({
  missions: getDataReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk, logger));

export default store;
