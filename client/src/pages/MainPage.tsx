import React from 'react';
import Header from 'components/base/Header';
import { MainBanner } from 'static/svg';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <>
      <Header />
      <MainBanner />
    </>
  );
};

export default MainPage;
