import React from 'react';
import UserAside from 'components/user/UserAside';
import UserState from 'components/user/UserState';
import UserInterest from 'components/user/UserInterest';
import UserRecomReader from 'components/user/UserRecomReader';

interface Props {}

const UserAsideContainer: React.FC<Props> = () => {
  return (
    <UserAside>
      <UserState />
      <UserInterest />
      <UserRecomReader />
    </UserAside>
  );
};

export default UserAsideContainer;
