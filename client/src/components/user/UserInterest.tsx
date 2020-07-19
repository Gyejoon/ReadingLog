import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/Card';
import { GoPencil } from 'react-icons/go';
import palette from 'lib/styles/palette';

interface Props {}

const UserInterest: React.SFC<Props> = () => {
  return (
    <Card>
      <Header>
        <span>관심분야</span>
        <GoPencil color={palette.blue.bright} />
      </Header>
      <Content></Content>
    </Card>
  );
};

const Header = styled.div`
  display: flex;
  > span {
    flex: 1;
    color: #777777;
    font-size: 18px;
    font-weight: 600;
  }
`;

const Content = styled.div``;

export default UserInterest;
