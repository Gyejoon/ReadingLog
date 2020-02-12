import React from 'react';
import styled, { css } from 'styled-components';

type IconSize = 'small' | 'medium' | 'large';

const IconStyle = styled.i<{
  color: string;
  isClick: boolean;
  size: IconSize;
}>`
  color: ${props => props.color};
  cursor: ${props => (props.isClick ? 'pointer' : 'default')};
  ${props =>
    props.size === 'small' &&
    css`
      font-size: 18px;
    `};
  ${props =>
    props.size === 'medium' &&
    css`
      font-size: 24px;
    `};
  ${props =>
    props.size === 'large' &&
    css`
      font-size: 36px;
    `};
`;

interface IconProps {
  name: string;
  size?: IconSize;
  color?: string;
  onClick?: () => void;
}

const Icon: React.FC<IconProps> = ({
  name,
  color = 'white',
  onClick,
  size = 'medium',
}) => {
  return (
    <IconStyle
      onClick={onClick}
      isClick={!!onClick}
      size={size}
      color={color}
      className="material-icons-outlined"
    >
      {name}
    </IconStyle>
  );
};

export default Icon;
