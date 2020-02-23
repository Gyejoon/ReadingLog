import React from 'react';
import styled from 'styled-components';
import AuthFormButton from './AuthFormButton';

const AuthLoginFormBlock = styled.form`
  .input {
    width: 100%;
    margin-bottom: 12px;
  }
`;

interface AuthLoginFormProps {}

const AuthLoginForm: React.SFC<AuthLoginFormProps> = () => {
  return (
    <AuthLoginFormBlock>
      <div className="ui left icon input">
        <input type="text" placeholder="아이디를 입력해주세요." />
        <i className="user icon"></i>
      </div>
      <div className="ui left icon input">
        <input type="password" placeholder="비밀번호를 입력해주세요." />
        <i className="lock icon"></i>
      </div>
      <AuthFormButton loginType="default">LOGIN</AuthFormButton>
    </AuthLoginFormBlock>
  );
};

export default AuthLoginForm;
