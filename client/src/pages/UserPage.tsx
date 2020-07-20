import React from 'react';
import UserPageTemplate from 'components/user/UserPageTemplate';
import UserContentTemplate from 'components/user/UserContentTemplate';
import FeedList from 'components/feeds/FeedList';
import UserAsideContainer from 'containers/user/UserAsideContainer';
import UserIntro from 'components/user/UserIntro';

interface Props {}

const UserPage: React.FC<Props> = () => {
  return (
    <UserPageTemplate>
      <UserIntro />
      <UserContentTemplate>
        <UserAsideContainer />
        <FeedList />
      </UserContentTemplate>
    </UserPageTemplate>
  );
};

export default UserPage;
