import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import media from 'lib/styles/media';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import useHeader from './hooks/useHeader';
import { userThumbnail } from 'static/images';
import { MdArrowDropDown } from 'react-icons/md';

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  const { user, path, showLoginModal, showRegisterModal } = useHeader();

  return (
    <HeaderBlock>
      <div className="title">
        <Link to="/">
          <span>ReadingLog</span>
        </Link>
      </div>
      <Navigation path={path} />
      {user ? (
        <HeaderRight>
          <img src={user.profile.thumbnail || userThumbnail} alt="thumbnail" />
          <div className="dropdown-wrapper">
            <span>{user.profile.nickname}</span>
            <MdArrowDropDown className="icons" size="24"></MdArrowDropDown>
          </div>
        </HeaderRight>
      ) : (
        <HeaderRight>
          <button className="sign-in" onClick={showLoginModal}>
            로그인
          </button>
          <button className="sign-up" onClick={showRegisterModal}>
            회원가입
          </button>
        </HeaderRight>
      )}
    </HeaderBlock>
  );
};

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
    a {
      text-decoration: none;
    }

    span {
      font-size: 25px;
      font-family: KottaOne;
      color: ${palette.blue.bright};
      padding-left: 8px;
    }
  }
`;

const HeaderRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 24px;

  img {
    display: block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 12px;
    object-fit: cover;
    transition: 0.125s all ease-in;
  }

  .dropdown-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .icons {
      margin-left: 4px;
    }
  }

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
`;

export default Header;
