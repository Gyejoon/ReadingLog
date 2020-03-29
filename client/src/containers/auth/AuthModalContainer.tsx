import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'modules';
import AuthModal from 'components/auth/AuthModal';
import { closeAuthModal, changeAuthModalMode } from 'modules/core';
import AuthFormContainer from './AuthFormContainer';

interface AuthModalProps {}

const AuthModalContainer: React.FC<AuthModalProps> = () => {
  const { visible, mode } = useSelector((state: RootState) => state.core.auth);
  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    dispatch(closeAuthModal());
  }, [dispatch]);

  const onToggleMode = useCallback(() => {
    const nextMode = mode === 'REGISTER' ? 'LOGIN' : 'REGISTER';
    dispatch(changeAuthModalMode(nextMode));
  }, [dispatch, mode]);

  if (!visible) return null;

  return (
    <AuthModal visible={visible} onClose={onClose} mode={mode}>
      <AuthFormContainer mode={mode} onToggleMode={onToggleMode} />
    </AuthModal>
  );
};

export default AuthModalContainer;
