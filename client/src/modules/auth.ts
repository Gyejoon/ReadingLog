import { createSlice } from '@reduxjs/toolkit';

export interface AuthState {
  register: RegisterFormState;
  login: LoginFormState;
}

export interface RegisterFormState {
  username: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  mobilePhoneNumber: string;
}

export interface LoginFormState {
  username: string;
  password: string;
}

const initialState: AuthState = {
  register: {
    username: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    mobilePhoneNumber: '',
  },
  login: {
    username: '',
    password: '',
  },
};

const auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeInput: (state, action) => {
      const { form, name, value } = action.payload;
      state[form] = {
        ...state[form],
        [name]: value,
      };
    },
  },
});

export const { changeInput } = auth.actions;

export default auth;
