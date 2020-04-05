import styled, { css } from 'styled-components';
import palette from 'lib/styles/palette';

export type ButtonAuthType = 'default' | 'facebook' | 'google';

const AuthFormButton = styled.button<{ authType: ButtonAuthType }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 100%;
  ${props =>
    props.authType === 'google'
      ? css`
          color: ${palette.gray6};
        `
      : css`
          color: white;
        `}
  

  ${props =>
    props.authType === 'default' &&
    css`
      background-color: ${palette.blue.bright};
    `}

    ${props =>
      props.authType === 'facebook' &&
      css`
        background-color: #304d8a;
      `}

    ${props =>
      props.authType === 'google' &&
      css`
        background-color: white;
      `}

  ${props =>
    props.authType !== 'default' &&
    css`
      border-radius: 4px;
    `}

  border: none;
  outline: none;
  cursor: pointer;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.13);
`;

export default AuthFormButton;
