import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import Icon from 'components/common/Icon';

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

const MainReviewCard = styled.div`
  width: 220px;
  height: 96px;
  padding: 12px;
  margin-right: 16px;
  background-color: #fff;
  box-shadow: 0 3px 22px 0 rgba(0, 0, 0, 0.12);

  .header {
    font-size: 8px;
    color: #cfcfcf;
  }

  .content {
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
  }

  .footer {
    text-align: right;
    i {
      font-size: 15px;
    }
  }
`;

interface MainReviewProps {}

const MainReview: React.SFC<MainReviewProps> = () => {
  const starCalculate = (star: number) => {
    const result: number[] = [];
    let resultSum = 0;

    for (let i = 0; i < 5; i++) {
      if (resultSum < star) {
        if (star - resultSum >= 1) {
          result.push(1);
          resultSum++;
        } else {
          result.push(0.5);
          resultSum += 0.5;
        }
      } else {
        result.push(0);
      }
    }

    return result;
  };

  const starRender = () => {
    const stars = starCalculate(4.5);

    return stars.map((star: number) => {
      let starType;

      if (star === 1) {
        starType = 'star';
      } else if (star === 0.5) {
        starType = 'star_half';
      } else {
        starType = 'star_border';
      }

      return <Icon name={starType} color="#ffc93d" />;
    });
  };

  const mainReviewCardRender = () => {
    const four = [1, 2, 3, 4];

    return four.map((i: number) => (
      <MainReviewCard key={i}>
        <span className="header">gyejoong님</span>
        <p className="content">
          개미가 아닌 고양이의 시선으로 보는 독특한 작품!!
        </p>
        <span className="footer">{starRender()}</span>
      </MainReviewCard>
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
