import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'components/base/Header';
import { useDispatch } from 'react-redux';
import { showAuthModal, changeAuthModalMode } from 'modules/core';

interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const showLoginModal = () => {
    dispatch(changeAuthModalMode('LOGIN'));
    dispatch(showAuthModal());
  };

  const showRegisterModal = () => {
    dispatch(changeAuthModalMode('REGISTER'));
    dispatch(showAuthModal());
  };

  return (
    <Header
      path={location.pathname}
      showLoginModal={showLoginModal}
      showRegisterModal={showRegisterModal}
    />
  );
};

export default HeaderContainer;
