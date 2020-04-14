import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { RootState } from 'modules';
import AuthModal from 'components/auth/AuthModal';
import { closeAuthModal, changeAuthModalMode, AuthMode } from 'modules/core';
import AuthFormContainer from './AuthFormContainer';

interface OwnProps {}
interface StateProps {
  visible: boolean;
  mode: AuthMode;
}
interface DispatchProps {
  closeAuthModal: typeof closeAuthModal;
  changeAuthModalMode: typeof changeAuthModalMode;
}
type AuthModalContainerProps = OwnProps & StateProps & DispatchProps;

const AuthModalContainer: React.FC<AuthModalContainerProps> = ({
  visible,
  mode,
  closeAuthModal,
  changeAuthModalMode,
}) => {
  const onClose = useCallback(() => {
    closeAuthModal();
  }, [closeAuthModal]);

  const onToggleMode = useCallback(() => {
    const nextMode = mode === 'REGISTER' ? 'LOGIN' : 'REGISTER';
    changeAuthModalMode(nextMode);
  }, [changeAuthModalMode, mode]);

  return (
    <AuthModal visible={visible} onClose={onClose} mode={mode}>
      <AuthFormContainer mode={mode} onToggleMode={onToggleMode} />
    </AuthModal>
  );
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  state => ({
    visible: state.core.auth.visible,
    mode: state.core.auth.mode,
  }),
  {
    closeAuthModal,
    changeAuthModalMode,
  },
)(AuthModalContainer);
