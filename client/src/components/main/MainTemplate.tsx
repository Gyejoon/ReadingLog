import React from 'react';
import styled from 'styled-components';

const MainTemplateBlock = styled.main`
  width: 100%;
  max-width: 1176px;
  margin: 0 auto;
  padding-top: 2.6rem;
`;

interface MainTemplateProps {}

const MainTemplate: React.SFC<MainTemplateProps> = ({ children }) => {
  return <MainTemplateBlock>{children}</MainTemplateBlock>;
};

export default MainTemplate;
