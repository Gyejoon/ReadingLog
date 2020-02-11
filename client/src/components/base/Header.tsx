import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import media from 'lib/styles/media';

const HeaderBlock = styled.div`
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  height: 74px;
  margin: 0 auto;

  .title {
    display: flex;
    flex: 1;
    padding-left: 16px;
    span {
      font-size: 25px;
      font-family: KottaOne;
      color: ${palette.blue.bright};
      padding-left: 8px;
    }
  }

  .content {
    display: flex;
    flex: 2;
    .menu-content {
      ${media.small} {
        display: none;
      }

      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      li {
        font-size: 20px;
        display: inline-block;
        padding: 24px 10px 24px 10px;

        &.active {
          color: ${palette.blue.bright};
          border-bottom: 2px solid ${palette.blue.bright};
        }
      }
    }
  }

  .right {
    padding-right: 24px;

    button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      cursor: pointer;
      outline: none;
      border: none;
      color: white;
      font-size: 15px;
      width: 85px;
      height: 36.5px;
    }

    .sign-in {
      color: #4378ff;
      background-color: #ffffff;
    }

    .sign-up {
      color: #ffffff;
      background-color: #4378ff;
      ${media.small} {
        display: none;
      }
    }
  }
`;

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <HeaderBlock>
      <div className="title">
        <span>ReadingLog</span>
      </div>
      <div className="content">
        <ul className="menu-content">
          <li className="active">책찾기</li>
          <li>리딩로그</li>
        </ul>
      </div>
      <div className="right">
        <button className="sign-in">로그인</button>
        <button className="sign-up">회원가입</button>
      </div>
    </HeaderBlock>
  );
};

export default Header;
