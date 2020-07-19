import React from 'react';
import FeedInput from 'components/feeds/FeedInput';
import { useSelector } from 'react-redux';
import { RootState } from 'modules';

interface Props {}

const FeedInputContainer: React.FC<Props> = () => {
  const { user } = useSelector((state: RootState) => state.core);

  if (!user) return null;

  return (
    <FeedInput
      profileImage={user.profile.thumbnail}
      nickname={user.profile.nickname}
    />
  );
};

export default FeedInputContainer;
