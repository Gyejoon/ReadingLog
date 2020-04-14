import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import media from 'lib/styles/media';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import useHeader from './hooks/useHeader';
import { userThumbnail } from 'static/images';
import { MdArrowDropDown, MdMenu } from 'react-icons/md';
import useToggle from 'lib/hooks/useToggle';
import HeaderUserDropDown from './HeaderUserDropDown';
import Drawer from './Drawer';

interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
  const {
    user,
    path,
    onLogout,
    showLoginModal,
    showRegisterModal,
    drawer,
    showDrawer,
    closeDrawer,
  } = useHeader();
  const [userDropDown, toggleUserDropDown] = useToggle(false);
  const ref = useRef<HTMLDivElement>(null);

  const onOutsideClick = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target as any)) return;
      toggleUserDropDown();
    },
    [toggleUserDropDown],
  );

  const onDrawerClick = useCallback(() => {
    showDrawer();
  }, [showDrawer]);

  const onDrawerOutSideClick = useCallback(
    (_: React.MouseEvent) => {
      closeDrawer();
    },
    [closeDrawer],
  );

  return (
    <HeaderBlock>
      <div className="title">
        <div className="mobile-drawer">
          <MdMenu
            size="32"
            color={palette.blue.bright}
            onClick={onDrawerClick}
          />
        </div>
        <div className="banner">
          <Link to="/">
            <span>ReadingLog</span>
          </Link>
        </div>
      </div>
      <Navigation path={path} />
      <Drawer visible={drawer} onOutSideClick={onDrawerOutSideClick} />
      {user ? (
        <HeaderRight>
          <div
            className="dropdown-wrapper"
            onClick={toggleUserDropDown}
            ref={ref}
          >
            <img
              src={user.profile.thumbnail || userThumbnail}
              alt="thumbnail"
            />
            <span>{user.profile.nickname}</span>
            <MdArrowDropDown className="icons" size="24" />
          </div>
          <HeaderUserDropDown
            visible={userDropDown}
            onClose={onOutsideClick}
            onLogout={onLogout}
          />
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

const HeaderBlock = styled.header`
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  height: 72px;
  margin: 0 auto;

  > .title {
    display: flex;
    flex: 1;
    padding-left: 16px;
    a {
      text-decoration: none;
    }

    .mobile-drawer {
      display: none;
      ${media.medium} {
        display: block;
      }
    }

    span {
      ${media.medium} {
        display: none;
      }
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
    ${media.small} {
      margin: 0;
    }
    object-fit: cover;
    transition: 0.125s all ease-in;
  }

  .dropdown-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${palette.gray8};

    ${media.medium} {
      span {
        display: none;
      }
    }

    &:hover {
      color: ${palette.gray6};
    }
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
