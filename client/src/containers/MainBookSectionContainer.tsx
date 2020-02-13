import React from 'react';
import MainBookSection from 'components/main/MainBookSection';

interface MainBookSectionContainerProps {}

const MainBookSectionContainer: React.FC<MainBookSectionContainerProps> = () => {
  return (
    <>
      <MainBookSection
        recommend="종규님이 좋아하실만한 책"
        title="이런 책은 어떠세요"
        tags={['소설', '자기계발', '인문']}
      />
      <MainBookSection
        recommend="북차트"
        title="스타트북에서 핫한 책 순위"
        tags={['요즘', '유행책', '나도인싸']}
      />
    </>
  );
};

export default MainBookSectionContainer;
