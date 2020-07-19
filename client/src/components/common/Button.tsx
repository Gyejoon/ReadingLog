import React from 'react';
import styled from 'styled-components';

interface Props {}

const Button: React.SFC<Props> = ({ children }) => {
  return <Block>{children}</Block>;
};

const Block = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  width: 76px;
  height: 30px;
  border: 1px solid #0085ff;
  background-color: #ffffff;
  font-size: 12px;
  color: #0085ff;
  cursor: pointer;
  outline: none;
`;

export default Button;
