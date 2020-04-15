import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import UserTemplate from 'components/user/UserTemplate';

interface UserPageProps extends RouteComponentProps<{ username: string }> {}

const UserPage: React.FC<UserPageProps> = () => {
  return <UserTemplate>User Template</UserTemplate>;
};

export default UserPage;
