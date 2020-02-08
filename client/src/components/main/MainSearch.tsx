import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';

const MainSearchBlock = styled.div`
  display: flex;
  width: 833px;
  height: 48px;
  border-radius: 47px;
  box-shadow: 0 3px 24px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
  padding: 12px;
  > span {
    flex: 1;
    font-size: 18px;
    color: #b0b0b0;
  }
`;

const MainSearchButton = styled.button`
  width: 111px;
  height: 49px;
  color: #fff;
  font-size: 18px;
  border-radius: 24px;
  box-shadow: 0 3px 24px 0 rgba(0, 0, 0, 0.08);
  background-color: ${palette.blue.bright};
  outline: none;
  border: none;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

interface MainSearchProps {}

const MainSearch: React.SFC<MainSearchProps> = () => {
  return (
    <MainSearchBlock>
      <span>장르</span>
      <span>제목</span>
      <span>작가</span>
      <MainSearchButton>
        <span>
          <i className="material-icons-outlined">search</i>
          검색
        </span>
      </MainSearchButton>
    </MainSearchBlock>
  );
};

export default MainSearch;
