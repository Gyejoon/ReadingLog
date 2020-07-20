import React from 'react';
import styled from 'styled-components';
import OutsideClickHandler from 'react-outside-click-handler';
import HeaderUserDropDownItem from './HeaderUserDropDownItem';

interface HeaderUserDropDownProps {
  visible: boolean;
  onClose: (e: React.MouseEvent) => void;
  username: string;
  onLogout: () => void;
}

const HeaderUserDropDown: React.SFC<HeaderUserDropDownProps> = ({
  onClose,
  onLogout,
  username,
  visible,
}) => {
  if (!visible) return null;

  return (
    <OutsideClickHandler onOutsideClick={onClose}>
      <HeaderUserDropDownBlock onClick={onClose}>
        <DropDownWrapper>
          <HeaderUserDropDownItem to={`/@${username}`}>
            마이 페이지
          </HeaderUserDropDownItem>
          <HeaderUserDropDownItem onClick={onLogout}>
            로그아웃
          </HeaderUserDropDownItem>
        </DropDownWrapper>
      </HeaderUserDropDownBlock>
    </OutsideClickHandler>
  );
};

const HeaderUserDropDownBlock = styled.div`
  position: absolute;
  top: 0;
  right: 20px;
  margin-top: 4rem;
`;

const DropDownWrapper = styled.div`
  position: relative;
  z-index: 5;
  width: 12rem;
  background: white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
`;

export default HeaderUserDropDown;
