import React from 'react';
import styled from 'styled-components';

interface Props {}

const Card: React.SFC<Props> = ({ children }) => {
  return <Block>{children}</Block>;
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  box-shadow: 0 3px 22px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e3e3e3;
  background-color: #ffffff;
`;

export default Card;
