import React from 'react';
import styled from 'styled-components';
import UserIntro from './UserIntro';

const UserTemplateBlock = styled.div`
  width: 100%;
  .contents {
    max-width: 1176px;
    margin: 0 auto;
    padding-top: 2.6rem;
  }
`;

interface UserTemplateProps {}

const UserTemplate: React.SFC<UserTemplateProps> = ({ children }) => {
  return (
    <UserTemplateBlock>
      <UserIntro />
      <div className="contents">{children}</div>
    </UserTemplateBlock>
  );
};

export default UserTemplate;
