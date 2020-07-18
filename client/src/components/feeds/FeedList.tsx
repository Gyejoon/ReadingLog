import React from 'react';
import styled from 'styled-components';
import FeedItem from './FeedItem';

const FeedListBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

interface FeedListProps {}

const FeedList: React.SFC<FeedListProps> = () => {
  return (
    <FeedListBlock>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </FeedListBlock>
  );
};

export default FeedList;
