import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import MainReviewCard from './MainReviewCard';

const MainReviewBlock = styled.div`
  margin-top: 120px;

  .title {
    background-color: ${palette.blue.soft};
    border-radius: 27px;
    box-shadow: 0 3px 22px 0 rgba(0, 0, 0, 0.12);
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    width: 25%;
    padding: 10px;
    margin-bottom: 24px;
  }

  .card-wrap {
    display: flex;
  }
`;

interface MainReviewProps {}

const MainReview: React.SFC<MainReviewProps> = () => {
  const mainReviewCardRender = () => {
    const four = [1, 2, 3, 4];

    return four.map((i: number) => (
      <MainReviewCard
        key={i}
        username="gyejoong"
        reviewTitle="개미가 아닌 고양이의 시선으로 보는 독특한 작품!!"
        starRate={4.5}
      />
    ));
  };

  return (
    <MainReviewBlock>
      <div className="title">#어떤 책의 리뷰일까요?</div>
      <div className="card-wrap">{mainReviewCardRender()}</div>
    </MainReviewBlock>
  );
};

export default MainReview;
