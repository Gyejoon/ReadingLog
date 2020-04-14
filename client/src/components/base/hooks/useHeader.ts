import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  changeAuthModalMode,
  showAuthModal,
  showDrawer,
  closeDrawer,
} from 'modules/core';
import { useCallback } from 'react';
import { logout } from 'lib/api/auth';
import { RootState } from 'modules';
import storage from 'lib/storage';

export default function useHeader() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.core.user);
  const drawer = useSelector((state: RootState) => state.core.drawer);

  const showLoginModal = useCallback(() => {
    dispatch(changeAuthModalMode('LOGIN'));
    dispatch(showAuthModal());
  }, [dispatch]);

  const showRegisterModal = useCallback(() => {
    dispatch(changeAuthModalMode('REGISTER'));
    dispatch(showAuthModal());
  }, [dispatch]);

  const onDrawerClick = useCallback(() => {
    dispatch(showDrawer());
  }, [dispatch]);

  const onDrawerOutSideClick = useCallback(() => {
    dispatch(closeDrawer());
  }, [dispatch]);

  const onLogout = useCallback(async () => {
    try {
      await logout();
    } catch {}
    storage.removeItem('CURRENT_USER');
    window.location.href = '/';
  }, []);

  return {
    path: location.pathname,
    user,
    showLoginModal,
    showRegisterModal,
    onLogout,
    drawer,
    showDrawer: onDrawerClick,
    closeDrawer: onDrawerOutSideClick,
  };
}
