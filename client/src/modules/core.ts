import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentUser } from 'lib/graphql/user';

export type AuthMode = 'REGISTER' | 'LOGIN';

export interface CoreState {
  layer: boolean;
  user: CurrentUser | null;
  auth: {
    visible: boolean;
    mode: AuthMode;
  };
}

const initialState: CoreState = {
  layer: false,
  user: null,
  auth: {
    visible: false,
    mode: 'LOGIN',
  },
};

const core = createSlice({
  name: 'core',
  initialState,
  reducers: {
    showAuthModal(state) {
      state.auth.visible = true;
      state.layer = true;
    },
    closeAuthModal(state) {
      state.auth.visible = false;
      state.layer = false;
    },
    changeAuthModalMode(state, action: PayloadAction<AuthMode>) {
      state.auth.mode = action.payload;
    },
    setUser(state, action: PayloadAction<CurrentUser>) {
      state.user = action.payload;
    },
  },
});

export const {
  showAuthModal,
  closeAuthModal,
  changeAuthModalMode,
  setUser,
} = core.actions;

export default core;
