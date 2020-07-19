import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import UserPageTemplate from 'components/user/UserPageTemplate';
import UserContentTemplate from 'components/user/UserContentTemplate';
import UserIntroContainer from 'containers/user/UserIntroContainer';
import FeedList from 'components/feeds/FeedList';
import UserAsideContainer from 'containers/user/UserAsideContainer';

interface Props extends RouteComponentProps<{ username: string }> {}

const UserPage: React.FC<Props> = () => {
  return (
    <UserPageTemplate>
      <UserIntroContainer />
      <UserContentTemplate>
        <UserAsideContainer />
        <FeedList />
      </UserContentTemplate>
    </UserPageTemplate>
  );
};

export default UserPage;
