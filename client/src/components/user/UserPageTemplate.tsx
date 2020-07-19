import React from 'react';
import styled from 'styled-components';

interface Props {}

const UserPageTemplate: React.SFC<Props> = ({ children }) => {
  return <Block>{children}</Block>;
};

const Block = styled.div`
  width: 100%;
`;

export default UserPageTemplate;
