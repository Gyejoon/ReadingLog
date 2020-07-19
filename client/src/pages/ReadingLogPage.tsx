import React from 'react';
import FeedList from 'components/feeds/FeedList';
import FeedInputContainer from 'containers/reading-log/FeedInputContainer';
import ReadingLogMyInfo from 'components/reading-log/ReadingLogMyInfo';
import ReadingLogContentTemplate from 'components/reading-log/ReadingLogContentTemplate';
import ReadingLogPageTemplate from 'components/reading-log/ReadingLogPageTemplate';

interface ReadingLogPageProps {}

const ReadingLogPage: React.FC<ReadingLogPageProps> = () => {
  return (
    <ReadingLogPageTemplate>
      <ReadingLogContentTemplate>
        <FeedInputContainer />
        <FeedList />
      </ReadingLogContentTemplate>
      <ReadingLogMyInfo />
    </ReadingLogPageTemplate>
  );
};

export default ReadingLogPage;
