import React from 'react';
import MainTemplate from 'components/main/MainTemplate';
import MainBanner from 'components/main/MainBanner';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <MainTemplate>
      <MainBanner />
    </MainTemplate>
  );
};

export default MainPage;
