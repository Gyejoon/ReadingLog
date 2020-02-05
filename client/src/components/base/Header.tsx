import React from 'react';
import styled from 'styled-components';

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
      height: 28px;
      font-size: 25px;
      font-weight: 500;
      color: #0267ff;
      padding-left: 8px;
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
    }
  }
`;

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  return (
    <HeaderBlock>
      <div className="title">
        <span>StartBook</span>
      </div>
      <div className="right">
        <button className="sign-in">로그인</button>
        <button className="sign-up">회원가입</button>
      </div>
    </HeaderBlock>
  );
};

export default Header;
