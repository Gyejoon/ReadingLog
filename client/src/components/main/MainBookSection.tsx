import React from 'react';
import styled from 'styled-components';
import MainSectionTitle from './MainSectionTitle';
import MainBookCard from './MainBookCard';

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
      <MainBookSectionWrapper>
        <MainSectionTitle recommend={recommend} title={title} tags={tags} />
        <div className="card-wrap">{cardRender()}</div>
      </MainBookSectionWrapper>
    </MainBookSectionBlock>
  );
};

const MainBookSectionBlock = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .card-wrap {
    display: flex;
    margin-top: 20px;
  }
`;

const MainBookSectionWrapper = styled.div`
  margin: 120px 0 120px 3%;
`;

export default MainBookSection;
