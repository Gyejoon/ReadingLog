import React from 'react';
import styled from 'styled-components';
import { starCountCalculate } from 'lib/utils';
import media from 'lib/styles/media';
import Star from 'components/common/Star';

const MainReviewCardBlock = styled.div`
  position: relative;
  width: 100%;
  max-width: 220px;
  height: 96px;
  padding: 12px;
  margin-right: 16px;
  background-color: #fff;
  box-shadow: 0 3px 22px 0 rgba(0, 0, 0, 0.12);

  ${media.medium} {
    height: 76px;
  }

  .head {
    font-size: 8px;
    color: #cfcfcf;
  }

  .content {
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
  }

  .foot {
    float: right;
    i {
      font-size: 15px;
    }
  }
`;

interface MainReviewCardProps {
  username: string;
  reviewTitle: string;
  starRate: number;
}

const MainReviewCard: React.SFC<MainReviewCardProps> = ({
  username,
  reviewTitle,
  starRate,
}) => {
  const starRender = () => {
    const stars = starCountCalculate(starRate);

    return stars.map((rate: number, index: number) => {
      return <Star key={index + rate} rate={rate} />;
    });
  };

  return (
    <MainReviewCardBlock>
      <span className="head">{username}님</span>
      <p className="content">{reviewTitle}</p>
      <span className="foot">{starRender()}</span>
    </MainReviewCardBlock>
  );
};

export default MainReviewCard;
