import React from 'react';
import styled from 'styled-components';

interface Props {}

const ReadingLogMyInfo: React.SFC<Props> = ({ children }) => {
  return <Block>{children}</Block>;
};

const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 2rem;

  > div {
    &:not(:first-child) {
      margin-top: 2rem;
    }
  }
`;

export default ReadingLogMyInfo;
