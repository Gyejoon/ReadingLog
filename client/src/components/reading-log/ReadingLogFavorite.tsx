import React from 'react';
import styled from 'styled-components';
import Card from 'components/common/Card';
import { AiFillHeart } from 'react-icons/ai';
import ReadingLogFavoriteItem from './ReadingLogFavoriteItem';
import theme from 'lib/styles/theme';

interface Props {
  title: string;
}

const ReadingLogFavorite: React.SFC<Props> = ({ title }) => {
  return (
    <Card>
      <Header>
        <AiFillHeart color="#8ec9ff" size={24} />
        <span>{title}</span>
      </Header>
      <Content>
        <ReadingLogFavoriteItem />
        <ReadingLogFavoriteItem />
        <ReadingLogFavoriteItem />
      </Content>
      <Footer>더보기</Footer>
    </Card>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  > span {
    font-weight: 600;
    color: #777777;
    font-size: 18px;
    margin-left: 0.3rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const Footer = styled.div`
  border-top: 1px solid ${theme.borderColor};
  padding-top: 1rem;
  text-align: center;
  color: #acacac;
  font-size: 14px;
  cursor: pointer;
`;

export default ReadingLogFavorite;
