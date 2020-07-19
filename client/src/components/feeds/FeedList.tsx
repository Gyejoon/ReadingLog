import React from 'react';
import styled from 'styled-components';
import FeedItem from './FeedItem';

interface Props {}

const FeedList: React.SFC<Props> = () => {
  return (
    <Block>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </Block>
  );
};

const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default FeedList;
