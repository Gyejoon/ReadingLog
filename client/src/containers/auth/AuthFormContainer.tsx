import React, { useCallback } from 'react';
import { AuthMode } from 'modules/core';
import { RootState } from 'modules';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from 'components/auth/AuthForm';
import AuthLoginForm from 'components/auth/AuthLoginForm';
import AuthRegisterForm from 'components/auth/AuthRegisterForm';
import { changeInput } from 'modules/auth';

interface AuthFormContainerProps {
  mode: AuthMode;
  onToggleMode: () => void;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  mode,
  onToggleMode,
}) => {
  const { login, register } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const changeInputAction = useCallback(
    (form: string, name: string, value: string) => {
      dispatch(changeInput({ form, name, value }));
    },
    [dispatch],
  );

  return (
    <AuthForm mode={mode} onToggleMode={onToggleMode}>
      {mode === 'LOGIN' ? (
        <AuthLoginForm state={login} changeInputAction={changeInputAction} />
      ) : (
        <AuthRegisterForm
          state={register}
          changeInputAction={changeInputAction}
        />
      )}
    </AuthForm>
  );
};

export default AuthFormContainer;
