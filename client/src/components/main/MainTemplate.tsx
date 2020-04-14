import React from 'react';
import styled from 'styled-components';

const MainTemplateBlock = styled.main`
  align-items: center;
  padding-top: 2.6rem;
`;

interface MainTemplateProps {}

const MainTemplate: React.SFC<MainTemplateProps> = ({ children }) => {
  return <MainTemplateBlock>{children}</MainTemplateBlock>;
};

export default MainTemplate;
