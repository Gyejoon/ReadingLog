import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import media from 'lib/styles/media';
import { MdSearch } from 'react-icons/md';

const MainSearchBlock = styled.form`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

  width: 820px;
  height: 48px;

  ${media.medium} {
    width: 320px;
    height: 20px;
  }

  border-radius: 47px;
  box-shadow: 0 3px 24px 0 rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
  padding: 12px;
  > input {
    flex: 1;
    font-size: 18px;
    color: #b0b0b0;
    border: none;
    outline: none;
  }
`;

const MainSearchButton = styled.button`
  display: inline-flex;
  width: 110px;
  height: 52px;
  color: #fff;
  font-size: 18px;
  border-radius: 24px;
  box-shadow: 0 3px 24px 0 rgba(0, 0, 0, 0.08);
  background-color: ${palette.blue.bright};
  cursor: pointer;
  outline: none;
  border: none;
  align-items: center;
  justify-content: center;

  .icons {
    font-size: 24px;
  }

  ${media.medium} {
    color: ${palette.blue.bright};
    background: none;
    box-shadow: none;
    font-weight: 600;
    width: 48px;
    height: 48px;
    span {
      display: none;
    }
    .icons {
      font-size: 28px;
    }
  }
`;

interface MainSearchProps {}

const MainSearch: React.SFC<MainSearchProps> = () => {
  return (
    <MainSearchBlock>
      <input placeholder="장르, 제목, 작가 등으로 검색" />
      <MainSearchButton>
        <MdSearch className="icons" />
        <span>검색</span>
      </MainSearchButton>
    </MainSearchBlock>
  );
};

export default MainSearch;
