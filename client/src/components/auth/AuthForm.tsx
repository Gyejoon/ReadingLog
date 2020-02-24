import React from 'react';
import styled from 'styled-components';
import { AuthMode } from 'modules/core';
import palette from 'lib/styles/palette';
import { AiFillFacebook } from 'react-icons/ai';
import AuthFormButton from './AuthFormButton';
import { GoogleIcon } from 'static/svg';
import AuthLoginForm from './AuthLoginForm';
import AuthRegisterForm from './AuthRegisterForm';

const AuthFormBlock = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  .form-title {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 2.2rem;
  }

  .form-content {
    display: flex;
  }

  .social {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      text-align: center;
      font-size: 12px;
      color: ${palette.gray6};
      margin-bottom: 1.2rem;
    }
    button {
      margin-bottom: 8px;
      svg {
        margin-right: 8px;
      }
      .google {
        width: 18px;
        height: 18px;
      }
    }
  }

  .foot {
    text-align: center;
    font-size: 12px;
    color: ${palette.gray6};
    span {
      margin-right: 0.25rem;
    }
    .link {
      display: inline-block;
      font-weight: bold;
      color: ${palette.blue.bright};
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const Divider = styled.div`
  margin: 24px 0 24px 0;
  border-bottom: 1px solid ${palette.gray4};
`;

interface AuthFormProps {
  mode: AuthMode;
  onToggleMode: () => void;
}

const AuthForm: React.SFC<AuthFormProps> = ({ mode, onToggleMode }) => {
  const formTitle = mode === 'LOGIN' ? '로그인' : '회원가입';
  return (
    <AuthFormBlock>
      <div className="form-title">{formTitle}</div>
      <div className="form-content">
        <AuthLoginForm />
      </div>
      <Divider />
      <div className="social">
        <span>소셜 아이디로 로그인</span>
        <AuthFormButton authType="facebook">
          <AiFillFacebook tabIndex={1} size={24} />
          페이스북으로 로그인
        </AuthFormButton>
        <AuthFormButton authType="google">
          <GoogleIcon tabIndex={1} className="google" />
          구글 계정으로 로그인
        </AuthFormButton>
      </div>
      <Divider />
      <div className="foot">
        <span>아직 회원이 아니신가요?</span>
        <div
          className="link"
          tabIndex={7}
          onClick={onToggleMode}
          data-testid="switchmode"
        >
          회원가입
        </div>
      </div>
    </AuthFormBlock>
  );
};

export default AuthForm;
