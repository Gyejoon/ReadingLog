import React, { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import AuthFormButton from './AuthFormButton';
import { LoginFormState } from 'modules/auth';

const AuthLoginFormBlock = styled.form`
  .input {
    width: 100%;
    margin-bottom: 12px;
    height: 40px;
  }
`;

interface AuthLoginFormProps {
  state: LoginFormState;
  changeInputAction: (form: string, name: string, value: string) => void;
  onRequest: () => void;
}

const AuthLoginForm: React.SFC<AuthLoginFormProps> = ({
  state,
  changeInputAction,
  onRequest,
}) => {
  const { username, password } = state;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onRequest();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    changeInputAction('login', name, value);
  };

  return (
    <AuthLoginFormBlock onSubmit={onSubmit}>
      <div className="ui left icon input">
        <input
          type="text"
          placeholder="아이디를 입력해주세요."
          name="username"
          value={username}
          onChange={handleInputChange}
        />
        <i className="user icon"></i>
      </div>
      <div className="ui left icon input">
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <i className="lock icon"></i>
      </div>
      <AuthFormButton authType="default">LOGIN</AuthFormButton>
    </AuthLoginFormBlock>
  );
};

export default AuthLoginForm;
