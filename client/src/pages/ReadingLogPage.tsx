import React from 'react';
import FeedList from 'components/feeds/FeedList';
import ReadingLogTemplate from 'components/reading-log/ReadingLogTemplate';
import FeedInputContainer from 'containers/reading-log/FeedInputContainer';

interface ReadingLogPageProps {}

const ReadingLogPage: React.FC<ReadingLogPageProps> = () => {
  return (
    <ReadingLogTemplate>
      <FeedInputContainer />
      <FeedList />
    </ReadingLogTemplate>
  );
};

export default ReadingLogPage;
