import React from 'react';
import styled from 'styled-components';
import theme from 'lib/styles/theme';

interface Props {}

const UserContentTemplate: React.SFC<Props> = ({ children }) => {
  return (
    <Block>
      <div className="contents-wrapper">{children}</div>
    </Block>
  );
};

const Block = styled.div`
  width: 100%;
  height: auto;
  background-color: ${theme.backgroundColor};

  .contents-wrapper {
    display: flex;
    width: 1176px;
    margin: 0 auto;
    position: relative;
    padding: 0 0 2rem 0;
  }
`;

export default UserContentTemplate;
