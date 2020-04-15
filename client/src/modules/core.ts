import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CurrentUser } from 'lib/graphql/user';

export type AuthMode = 'REGISTER' | 'LOGIN';

export interface CoreState {
  drawer: boolean;
  layer: boolean;
  user: CurrentUser | null;
  auth: {
    visible: boolean;
    mode: AuthMode;
  };
}

const initialState: CoreState = {
  drawer: false,
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
    showDrawer(state) {
      state.drawer = true;
      state.layer = true;
    },
    closeDrawer(state) {
      state.drawer = false;
      state.layer = false;
    },
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
  showDrawer,
  closeDrawer
} = core.actions;

export default core;
