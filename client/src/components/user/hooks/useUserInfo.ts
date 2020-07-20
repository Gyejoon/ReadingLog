import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER_PROFILE, GetUserProfileResponse } from 'lib/graphql/user';

export default function useUserInfo() {
  const { username } = useParams();

  const userInfo = useQuery<GetUserProfileResponse>(GET_USER_PROFILE, {
    variables: {
      username,
    },
    fetchPolicy: 'cache-and-network',
  });

  return { userInfo };
}
