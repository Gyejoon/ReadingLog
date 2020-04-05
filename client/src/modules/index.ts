import { combineReducers } from 'redux';
import core from './core';
import auth from './auth';

const rootReducer = combineReducers({
  core: core.reducer,
  auth: auth.reducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
