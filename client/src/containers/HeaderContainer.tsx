import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'components/base/Header';

interface HeaderContainerProps {}

const HeaderContainer: React.FC<HeaderContainerProps> = () => {
    const location = useLocation();
  return (
      <Header path={location.pathname}/>
  );
};

export default HeaderContainer;
