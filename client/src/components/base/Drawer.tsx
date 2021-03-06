import React from 'react';
import styled, { css } from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import palette from 'lib/styles/palette';
import transitions from 'lib/styles/transitions';
import useCloseTransition from 'lib/hooks/useCloseTransition';
import DrawerMenuItem from './DrawerMenuItem';

interface DrawerProps {
  visible: boolean;
  onOutSideClick: (e: React.MouseEvent) => void;
}

const Drawer: React.SFC<DrawerProps> = ({ visible, onOutSideClick }) => {
  const { closed } = useCloseTransition(visible, 200);

  if (!visible && closed) return null;

  return (
    <OutsideClickHandler onOutsideClick={onOutSideClick}>
      <DrawerBlock visible={visible}>
        <DrawerContentWrapper>
          <header>
            <p>ReadingLog</p>
          </header>
          <nav>
            <ul>
              <DrawerMenuItem to="/" onOutSideClick={onOutSideClick}>
                책찾기
              </DrawerMenuItem>
              <DrawerMenuItem to="/reading-log" onOutSideClick={onOutSideClick}>
                리딩로그
              </DrawerMenuItem>
            </ul>
          </nav>
        </DrawerContentWrapper>
      </DrawerBlock>
    </OutsideClickHandler>
  );
};

const DrawerBlock = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 240px;
  height: 100%;
  background: white;
  z-index: 20;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);

  ${props =>
    props.visible
      ? css`
          animation: ${transitions.slideLeftToRight} 0.2s;
        `
      : css`
          animation: ${transitions.slideRightToLeft} 0.2s forwards ease-in-out;
        `}
`;

const DrawerContentWrapper = styled.div`
  > header {
    border-bottom: 1px solid #efefef;

    > p {
      font-size: 24px;
      margin: 18px 0 18px 24px;
      color: ${palette.blue.bright};
    }
  }

  > nav {
    display: block;
    flex-direction: column;
    margin-left: 32px;

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }
  }
`;

export default Drawer;
