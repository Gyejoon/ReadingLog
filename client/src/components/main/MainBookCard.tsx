import React from 'react';
import styled from 'styled-components';
import { starCountCalculate } from 'lib/utils';
import media from 'lib/styles/media';
import Star from 'components/common/Star';

interface MainBookCardBlockProps {
  imgUrl: string;
}

const MainBookCardBlock = styled.div<MainBookCardBlockProps>`
  width: 248px;
  height: 406px;
  margin-right: 16px;
  background-image: url(${props => props.imgUrl});
  background-size: 248px 406px;
  color: #fff;
  ${media.medium} {
    width: 68px;
    height: 284px;
  }

  .content {
    padding: 80% 20px 0 20px;

    p {
      font-weight: 600;
      font-size: 23px;
      margin-bottom: 4px;
    }

    span {
      color: #fff;
    }

    .foot {
      margin-top: 40px;
      p {
        text-align: right;
        font-size: 15px;
        margin-bottom: 4px;
      }
      float: right;
    }
  }
`;

interface Book {
  imgUrl: string;
  name: string;
  author: string;
  starRate: number;
}

interface MainBookProps {
  book: Book;
}

const MainBookCard: React.SFC<MainBookProps> = ({ book }) => {
  const { imgUrl, name, author, starRate } = book;

  const starRender = () => {
    const stars = starCountCalculate(starRate);

    return stars.map((rate: number, index: number) => {
      return <Star key={index} rate={rate} />;
    });
  };

  return (
    <MainBookCardBlock imgUrl={imgUrl}>
      <div className="content">
        <p>{name}</p>
        <span>{author}</span>
        <div className="foot">
          <p>평점</p>
          {starRender()}
        </div>
      </div>
    </MainBookCardBlock>
  );
};

export default MainBookCard;
