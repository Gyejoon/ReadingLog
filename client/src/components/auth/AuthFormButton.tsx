import styled, { css } from 'styled-components';
import palette from 'lib/styles/palette';

export type ButtonLoginType = 'default' | 'facebook' | 'google';

const AuthFormButton = styled.button<{ loginType: ButtonLoginType }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  ${props =>
    props.loginType === 'google'
      ? css`
          color: ${palette.gray6};
        `
      : css`
          color: white;
        `}
  

  ${props =>
    props.loginType === 'default' &&
    css`
      background-color: ${palette.blue.bright};
    `}

    ${props =>
      props.loginType === 'facebook' &&
      css`
        background-color: #304d8a;
      `}

    ${props =>
      props.loginType === 'google' &&
      css`
        background-color: white;
      `}

  ${props =>
    props.loginType !== 'default' &&
    css`
      border-radius: 4px;
    `}

  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.13);
`;

export default AuthFormButton;
