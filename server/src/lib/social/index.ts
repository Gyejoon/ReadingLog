export type SocialProvider = 'facebook' | 'google';

export type SocialProfile = {
  uid: number | string;
  thumbnail: string | null;
  email: string | null;
  name: string;
  username?: string;
};