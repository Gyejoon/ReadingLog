import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_PROFILE } from 'lib/graphql/user';

export default function useUserInfo() {
  const { username } = useParams();

  const userInfo = useQuery(GET_USER_PROFILE, {
    variables: {
      username,
    },
    skip: true,
    fetchPolicy: 'network-only',
  });

  return { userInfo };
}
