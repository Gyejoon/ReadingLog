import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type AuthMode = 'REGISTER' | 'LOGIN';

export interface CoreState {
  layer: boolean;
  auth: {
    visible: boolean;
    mode: AuthMode;
  };
}

const initialState: CoreState = {
  layer: false,
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
  },
});

export const {
  showAuthModal,
  closeAuthModal,
  changeAuthModalMode,
} = core.actions;

export default core;
