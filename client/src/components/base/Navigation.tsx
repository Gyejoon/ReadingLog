import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import media from 'lib/styles/media';
import { Link } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';

const NavigationBlock = styled.div`
  display: flex;
  flex: 3;
  ul {
    ${media.medium} {
      display: none;
    }

    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;

    a {
      text-decoration: none;
      &:visited {
        color: #333;
      }
    }

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
`;

interface NavigationProps {
  path: string;
}

const Navigation: React.SFC<NavigationProps> = ({ path }) => {
  const navRender = () => {
    const navs = [
      {
        path: '/',
        name: '책찾기',
      },
      {
        path: '/reading-log',
        name: '리딩로그',
      },
    ];

    return navs.map((nav, index) => (
      <Link to={nav.path} key={index}>
        <li className={nav.path === path ? 'active' : ''}>{nav.name}</li>
      </Link>
    ));
  };

  return (
    <NavigationBlock>
      <ul>{navRender()}</ul>
      <HeaderSearch />
    </NavigationBlock>
  );
};

export default Navigation;
