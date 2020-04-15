import React from 'react';
import styled from 'styled-components';

const FeedListBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

interface FeedListProps {}

const FeedList: React.SFC<FeedListProps> = () => {
  return <FeedListBlock></FeedListBlock>;
};

export default FeedList;
