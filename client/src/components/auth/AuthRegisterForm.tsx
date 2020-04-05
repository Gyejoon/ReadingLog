import React, { ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import AuthFormButton from './AuthFormButton';
import { RegisterFormState } from 'modules/auth';

const AuthRegisterFormBlock = styled.form`
  .input {
    width: 100%;
    margin-bottom: 12px;
    height: 40px;
  }
`;

interface AuthRegisterFormProps {
  state: RegisterFormState;
  changeInputAction: (form: string, name: string, value: string) => void;
  onRequest: () => void;
}

const AuthRegisterForm: React.SFC<AuthRegisterFormProps> = ({
  state,
  changeInputAction,
  onRequest,
}) => {
  const {
    username,
    password,
    passwordConfirm,
    nickname,
    mobilePhoneNumber,
  } = state;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    onRequest();
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    changeInputAction('register', name, value);
  };

  return (
    <AuthRegisterFormBlock onSubmit={onSubmit}>
      <div className="ui left icon input">
        <input
          type="text"
          placeholder="아이디 (이메일)"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
        <i className="user icon"></i>
      </div>
      <div className="ui left icon input">
        <input
          type="password"
          placeholder="비밀번호 (영문 숫자 특수문자 2가지 이상 6~15자 이내)"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <i className="lock icon"></i>
      </div>
      <div className="ui left icon input">
        <input
          type="password"
          placeholder="비밀번호 확인"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleInputChange}
        />
        <i className="lock icon"></i>
      </div>
      <div className="ui left icon input">
        <input
          type="text"
          placeholder="이름 / 닉네임"
          name="nickname"
          value={nickname}
          onChange={handleInputChange}
        />
        <i className="user icon"></i>
      </div>
      <div className="ui left icon input">
        <input
          type="text"
          placeholder="휴대폰번호"
          name="mobilePhoneNumber"
          value={mobilePhoneNumber}
          onChange={handleInputChange}
        />
        <i className="user icon"></i>
      </div>
      <AuthFormButton authType="default">계속하기</AuthFormButton>
    </AuthRegisterFormBlock>
  );
};

export default AuthRegisterForm;
