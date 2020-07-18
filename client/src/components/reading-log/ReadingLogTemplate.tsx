import React from 'react';
import styled from 'styled-components';
import theme from 'lib/styles/theme';

interface Props {}

const ReadingLogTemplate: React.SFC<Props> = ({ children }) => {
  return (
    <Block>
      <div className="content">{children}</div>
    </Block>
  );
};

const Block = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${theme.backgroundColor};

  > .content {
    width: 1024px;
    margin: 0 auto;
    position: relative;
    top: 2rem;
  }
`;

export default ReadingLogTemplate;
