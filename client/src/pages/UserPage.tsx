import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface UserPageProps extends RouteComponentProps<{ username: string }> {}

const UserPage: React.FC<UserPageProps> = ({ match }) => {
  const { username } = match.params;
  return <div>{username}의 UserPage</div>;
};

export default UserPage;
