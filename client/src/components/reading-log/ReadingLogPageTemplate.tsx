import React from 'react';
import styled from 'styled-components';
import theme from 'lib/styles/theme';

interface Props {}

const ReadingLogPageTemplate: React.SFC<Props> = ({ children }) => {
  return (
    <Block>
      <ContentWrapper>{children}</ContentWrapper>
    </Block>
  );
};

const Block = styled.div`
  width: 100%;
  height: auto;
  background-color: ${theme.backgroundColor};
`;

const ContentWrapper = styled.div`
  display: flex;
  width: 1024px;
  margin: 0 auto;
  position: relative;
  padding: 2rem 0 2rem 0;
`;

export default ReadingLogPageTemplate;
