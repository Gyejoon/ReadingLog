import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthMode = 'REGISTER' | 'LOGIN';

export interface CoreState {
  auth: {
    visible: boolean;
    mode: AuthMode;
  };
}

const initialState: CoreState = {
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
    },
    closeAuthModal(state) {
      state.auth.visible = false;
    },
    changeAuthModalMode(state, action: PayloadAction<AuthMode>) {
      state.auth.mode = action.payload;
    },
  },
});

export default core;
