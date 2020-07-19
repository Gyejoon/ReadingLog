import React from 'react';
import styled from 'styled-components';

interface Props {}

const UserAside: React.SFC<Props> = ({ children }) => {
  return <Block>{children}</Block>;
};

const Block = styled.aside`
  width: 558px;
  padding: 2rem 2rem 2rem 1rem;

  > div {
    &:not(:first-child) {
      margin-top: 2rem;
    }
  }
`;

export default UserAside;
