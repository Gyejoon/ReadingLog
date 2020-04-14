import React from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';

interface DrawerProps {
  visible: boolean;
  onOutSideClick: (e: React.MouseEvent) => void;
}

const Drawer: React.SFC<DrawerProps> = ({ visible, onOutSideClick }) => {
  if (!visible) return null;

  return (
    <OutsideClickHandler onOutsideClick={onOutSideClick}>
      <DrawerBlock></DrawerBlock>
    </OutsideClickHandler>
  );
};

const DrawerBlock = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 160px;
  height: 100%;
  background: white;
  z-index: 20;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.09);
`;

export default Drawer;
