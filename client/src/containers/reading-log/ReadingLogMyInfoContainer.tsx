import React from 'react';
import ReadingLogMyInfo from 'components/reading-log/ReadingLogMyInfo';
import ReadingLogMyProfile from 'components/reading-log/ReadingLogMyProfile';
import ReadingLogFavorite from 'components/reading-log/ReadingLogFavorite';

interface Props {}

const ReadingLogMyInfoContainer: React.FC<Props> = () => {
  return (
    <ReadingLogMyInfo>
      <ReadingLogMyProfile />
      <ReadingLogFavorite title="내가 좋아한 도서" />
      <ReadingLogFavorite title="내 주변 리더들이 좋아한 도서" />
      <ReadingLogFavorite title="내가 등록한 도서" />
    </ReadingLogMyInfo>
  );
};

export default ReadingLogMyInfoContainer;
