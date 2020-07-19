import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/Card';
import theme from 'lib/styles/theme';
import UserRecomReaderItem from './UserRecomReaderItem';

interface Props {}

const UserRecomReader: React.SFC<Props> = () => {
  return (
    <Card>
      <Header>
        <span>리더 추천</span>
      </Header>
      <Content>
        <UserRecomReaderItem />
        <UserRecomReaderItem />
        <UserRecomReaderItem />
      </Content>
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

const Content = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    &:not(:last-child) {
      border-bottom: 1px solid ${theme.borderColor};
    }
  }
`;

export default UserRecomReader;
