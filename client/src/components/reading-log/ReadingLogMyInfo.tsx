import React from 'react';
import styled from 'styled-components';

interface Props {}

const ReadingLogMyInfo: React.SFC<Props> = () => {
  return <Block></Block>;
};

const Block = styled.div`
  width: calc(768px + 4.2rem);
  display: flex;
  flex-direction: column;
`;

export default ReadingLogMyInfo;
