import React from 'react';
import MainBanner from 'components/main/MainBanner';
import MainReview from 'components/main/MainReview';

interface MainPageProps {}

const MainPage: React.FC<MainPageProps> = () => {
  return (
    <>
      <MainBanner />
      <MainReview />
    </>
  );
};

export default MainPage;
