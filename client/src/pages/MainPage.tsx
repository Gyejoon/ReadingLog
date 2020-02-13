import React from 'react';
import MainTemplate from 'components/main/MainTemplate';
import MainBanner from 'components/main/MainBanner';
import MainBookSectionContainer from 'containers/MainBookSectionContainer';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <MainTemplate>
      <MainBanner />
      <MainBookSectionContainer />
    </MainTemplate>
  );
};

export default MainPage;
