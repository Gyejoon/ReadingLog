import React from 'react';
import FeedList from 'components/feeds/FeedList';
import FeedInputContainer from 'containers/reading-log/FeedInputContainer';
import ReadingLogContentTemplate from 'components/reading-log/ReadingLogContentTemplate';
import ReadingLogPageTemplate from 'components/reading-log/ReadingLogPageTemplate';
import ReadingLogMyInfoContainer from 'containers/reading-log/ReadingLogMyInfoContainer';

interface ReadingLogPageProps {}

const ReadingLogPage: React.FC<ReadingLogPageProps> = () => {
  return (
    <ReadingLogPageTemplate>
      <ReadingLogContentTemplate>
        <FeedInputContainer />
        <FeedList />
      </ReadingLogContentTemplate>
      <ReadingLogMyInfoContainer />
    </ReadingLogPageTemplate>
  );
};

export default ReadingLogPage;
