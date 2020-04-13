import React, { useCallback, useState } from 'react';
import { AuthMode, closeAuthModal } from 'modules/core';
import { RootState } from 'modules';
import { useSelector, useDispatch } from 'react-redux';
import AuthForm from 'components/auth/AuthForm';
import AuthLoginForm from 'components/auth/AuthLoginForm';
import AuthRegisterForm from 'components/auth/AuthRegisterForm';
import { changeInput } from 'modules/auth';
import { localLogin, localRegister } from 'lib/api/auth';
import { toast } from 'react-toastify';

interface AuthFormContainerProps {
  mode: AuthMode;
  onToggleMode: () => void;
}

const AuthFormContainer: React.FC<AuthFormContainerProps> = ({
  mode,
  onToggleMode,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [, setData] = useState<any | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const { login, register } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const changeInputAction = useCallback(
    (form: string, name: string, value: string) => {
      dispatch(changeInput({ form, name, value }));
    },
    [dispatch],
  );

  const onRequest = async () => {
    try {
      setLoading(true);
      const response = await (mode === 'LOGIN'
        ? localLogin(login)
        : localRegister({
            username: register.username,
            password: register.password,
            nickname: register.nickname,
            mobile_phone_number: register.mobilePhoneNumber,
          }));
      setData(response.data);
      dispatch(closeAuthModal());
      toast.success('정상적으로 로그인 되었습니다.');
    } catch (e) {
      toast.error('아이디 혹은 패스워드가 일치하지 않습니다.');
      setError(e);
      throw e;
    }
    setLoading(false);
  };

  return (
    <AuthForm
      mode={mode}
      onToggleMode={onToggleMode}
      loading={loading}
      error={error}
    >
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
