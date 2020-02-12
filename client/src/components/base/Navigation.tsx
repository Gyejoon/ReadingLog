import React from 'react';
import styled from 'styled-components';
import palette from 'lib/styles/palette';
import media from 'lib/styles/media';

const NavigationBlock = styled.div`
  display: flex;
  flex: 3;
  ul {
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
`;

interface NavigationProps {}

const Navigation: React.SFC<NavigationProps> = () => {
  return (
    <NavigationBlock>
      <ul>
        <li className="active">책찾기</li>
        <li>리딩로그</li>
      </ul>
    </NavigationBlock>
  );
};

export default Navigation;
