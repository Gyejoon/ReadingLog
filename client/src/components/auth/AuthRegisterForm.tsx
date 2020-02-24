import React from 'react';
import styled from 'styled-components';
import AuthFormButton from './AuthFormButton';

const AuthRegisterFormBlock = styled.form`
  .input {
    width: 100%;
    margin-bottom: 12px;
    height: 40px;
  }
`;

interface AuthRegisterFormProps {}

const AuthRegisterForm: React.SFC<AuthRegisterFormProps> = () => {
  return (
    <AuthRegisterFormBlock>
      <div className="ui left icon input">
        <input type="text" placeholder="아이디 (이메일)" />
        <i className="user icon"></i>
      </div>
      <div className="ui left icon input">
        <input
          type="password"
          placeholder="비밀번호 (영문 숫자 특수문자 2가지 이상 6~15자 이내)"
        />
        <i className="lock icon"></i>
      </div>
      <div className="ui left icon input">
        <input type="password" placeholder="비밀번호 확인" />
        <i className="lock icon"></i>
      </div>
      <div className="ui left icon input">
        <input type="text" placeholder="이름 / 닉네임" />
        <i className="user icon"></i>
      </div>
      <div className="ui left icon input">
        <input type="text" placeholder="휴대폰번호" />
        <i className="user icon"></i>
      </div>
      <AuthFormButton authType="default">계속하기</AuthFormButton>
    </AuthRegisterFormBlock>
  );
};

export default AuthRegisterForm;
