import gql from 'graphql-tag';

export type ProfileLinks = {
  url?: string;
  email?: string;
  github?: string;
  twitter?: string;
  facebook?: string;
};

export type UserProfile = {
  id: string;
  nickname: string;
  thumbnail: string | null;
  about?: string;
  profile_links: ProfileLinks;
};

export type User = {
  id: string;
  username: string;
  is_certified: boolean;
  profile: UserProfile;
};

export const GET_CURRENT_USER = gql`
  query CurrentUser {
    auth {
      id
      username
      profile {
        id
        nickname
        thumbnail
      }
    }
  }
`;

export type CurrentUser = {
  id: string;
  username: string;
  profile: {
    id: string;
    nickname: string;
    thumbnail: string | null;
  };
};

export const GET_USER_PROFILE = gql`
  query UserProfile($username: String!) {
    user(username: $username) {
      id
      username
      profile {
        id
        nickname
        thumbnail
        profile_links
        about
      }
    }
  }
`;

export type GetUserProfileResponse = {
  user: {
    id: string;
    username: string;
    profile: UserProfile;
  };
};
