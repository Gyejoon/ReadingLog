import React from 'react';
import styled from 'styled-components';

interface Props {}

const ReadingLogContentTemplate: React.SFC<Props> = ({ children }) => {
  return <Block>{children}</Block>;
};

const Block = styled.div`
  width: 656px;
`;

export default ReadingLogContentTemplate;
