import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';

const MainReviewBlock = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  .title {
    background-color: ${palette.blue.soft};
    width: 50px;
    padding: 16px;
  }
`;

interface MainReviewProps {}

const MainReview: React.SFC<MainReviewProps> = () => {
  return (
    <MainReviewBlock>
      <div className="title">#어떤 책의 리뷰일까요?</div>
      <div></div>
    </MainReviewBlock>
  );
};

export default MainReview;
