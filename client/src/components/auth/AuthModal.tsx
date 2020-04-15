import React from 'react';
import styled, { css } from 'styled-components';
import { MdClose } from 'react-icons/md';
import transitions from 'lib/styles/transitions';
import palette from 'lib/styles/palette';
import { AuthMode } from 'modules/core';
import useCloseTransition from 'lib/hooks/useCloseTransition';

const AuthModalBlock = styled.div<{ visible: boolean; mode: AuthMode }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;
  .wrapper {
    width: 354px;
    height: ${props => (props.mode === 'LOGIN' ? '528px' : '648px')};
    background: white;
    padding: 2.2rem;

    ${props =>
      props.visible
        ? css`
            animation: ${transitions.popInFromBottom} 0.4s forwards ease-in-out;
          `
        : css`
            animation: ${transitions.popOutToBottom} 0.2s forwards ease-in-out;
          `}

    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
    display: flex;
    flex-direction: column;

    .brand {
      font-size: 1rem;
      color: ${palette.blue.bright};
      font-family: KottaOne;
      margin-bottom: 8px;
    }

    .exit-wrapper {
      display: flex;
      justify-content: flex-end;
      font-size: 1.5rem;
      color: ${palette.gray6};
      svg {
        cursor: pointer;
      }
    }

    .form-wrapper {
      flex: 1;
    }
  }
`;

interface AuthModalProps {
  mode: AuthMode;
  visible: boolean;
  onClose: () => void;
}

const AuthModal: React.SFC<AuthModalProps> = ({
  mode,
  visible,
  children,
  onClose,
}) => {
  const { closed } = useCloseTransition(visible, 200);

  if (!visible && closed) return null;

  return (
    <AuthModalBlock visible={visible} mode={mode}>
      <div className="wrapper">
        <div className="exit-wrapper">
          <MdClose onClick={onClose} tabIndex={1} />
        </div>
        <div className="brand">ReadingLog</div>
        <div className="form-wrapper">{children}</div>
      </div>
    </AuthModalBlock>
  );
};

export default AuthModal;
