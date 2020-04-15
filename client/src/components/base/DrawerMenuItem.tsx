import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const MenuItemStyle = styled.li`
  margin: 24px 0 24px 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

interface MenuItemProps {
  to: string;
  onOutSideClick: (e: React.MouseEvent) => void;
}

const DrawerMenuItem: React.SFC<MenuItemProps> = ({
  to,
  onOutSideClick,
  children,
}) => {
  const history = useHistory();

  const onClick = useCallback(
    (e: React.MouseEvent) => {
      history.push(to);
      onOutSideClick(e);
    },
    [to, history, onOutSideClick],
  );

  return <MenuItemStyle onClick={onClick}>{children}</MenuItemStyle>;
};

export default DrawerMenuItem;
