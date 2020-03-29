import { combineReducers } from 'redux';
import core, { CoreState } from './core';
import auth, { AuthState } from './auth';

export type RootState = {
  core: CoreState;
  auth: AuthState;
};

const rootReducer = combineReducers({
  core: core.reducer,
  auth: auth.reducer,
});

export default rootReducer;
