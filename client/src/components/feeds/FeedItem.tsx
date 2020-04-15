import React from 'react';
import styled from 'styled-components';

const FeedItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: white;
`;

interface FeedItemProps {}

const FeedItem: React.SFC<FeedItemProps> = () => {
  return <FeedItemBlock></FeedItemBlock>;
};

export default FeedItem;
