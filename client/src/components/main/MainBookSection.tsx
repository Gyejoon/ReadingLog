import React from 'react';
import styled from 'styled-components';
import MainSectionTitle from './MainSectionTitle';
import MainBookCard from './MainBookCard';

const MainBookSectionBlock = styled.section`
  margin-top: 120px;
  padding-bottom: 120px;
  margin-left: 23%;

  .card-wrap {
    display: flex;
    margin-top: 20px;
  }
`;

interface MainBookSectionProps {
  recommend: string;
  title: string;
  tags: string[];
}

const MainBookSection: React.SFC<MainBookSectionProps> = ({
  recommend,
  title,
  tags,
}) => {
  const cardRender = () => {
    const four = [1, 2, 3, 4];

    return four.map(i => (
      <MainBookCard
        key={i}
        book={{
          imgUrl:
            'https://pds.joins.com//news/component/joongang_sunday/201806/02/41368037-ec45-425f-a635-e76d1ef11119.jpg',
          name: '고양이',
          author: '베르나르 베르베르',
          starRate: 4.5,
        }}
      />
    ));
  };

  return (
    <MainBookSectionBlock>
      <MainSectionTitle recommend={recommend} title={title} tags={tags} />
      <div className="card-wrap">{cardRender()}</div>
    </MainBookSectionBlock>
  );
};

export default MainBookSection;
