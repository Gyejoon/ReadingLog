import React, { useCallback, useState } from 'react';
import { AuthMode, setUser, closeAuthModal } from 'modules/core';
import { RootState } from 'modules';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from 'components/auth/AuthForm';
import AuthLoginForm from 'components/auth/AuthLoginForm';
import AuthRegisterForm from 'components/auth/AuthRegisterForm';
import { changeInput } from 'modules/auth';
import { localLogin, localRegister } from 'lib/api/auth';
import { toast } from 'react-toastify';
import { useApolloClient } from '@apollo/react-hooks';
import { CurrentUser, GET_CURRENT_USER } from 'lib/graphql/user';
import storage from 'lib/storage';

interface AuthFormContainerProps {
  mode: AuthMode;
  onToggleMode: () => void;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  mode,
  onToggleMode,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { login, register } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const client = useApolloClient();

  const changeInputAction = useCallback(
    (form: string, name: string, value: string) => {
      dispatch(changeInput({ form, name, value }));
    },
    [dispatch],
  );

  const onRequest = async () => {
    try {
      setLoading(true);
      await (mode === 'LOGIN'
        ? localLogin(login)
        : localRegister({
            username: register.username,
            password: register.password,
            nickname: register.nickname,
            mobile_phone_number: register.mobilePhoneNumber,
          }));

      const response = await client.query<{ auth: CurrentUser }>({
        query: GET_CURRENT_USER,
        fetchPolicy: 'network-only',
      });
      setLoading(false);
      storage.setItem('CURRENT_USER', response.data.auth);
      dispatch(setUser(response.data.auth));
      dispatch(closeAuthModal());
    } catch (e) {
      setLoading(false);
      toast.error('아이디 혹은 패스워드가 일치하지 않습니다.');
      throw e;
    }
  };

  return (
    <AuthForm mode={mode} onToggleMode={onToggleMode} loading={loading}>
      {mode === 'LOGIN' ? (
        <AuthLoginForm
          state={login}
          changeInputAction={changeInputAction}
          onRequest={onRequest}
        />
      ) : (
        <AuthRegisterForm
          state={register}
          changeInputAction={changeInputAction}
          onRequest={onRequest}
        />
      )}
    </AuthForm>
  );
};

export default AuthFormContainer;
