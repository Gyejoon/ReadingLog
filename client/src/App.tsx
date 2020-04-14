import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from 'pages/MainPage';
import ReadingLogPage from 'pages/ReadingLogPage';
import Core from 'containers/base/Core';
import UserPage from 'pages/UserPage';
import Header from 'components/base/Header';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Helmet>
        <title>ReadingLog</title>
        <meta
          name="description"
          content="책을 좋아하는 사람들이 리뷰하고 평점을 맺을 수 있는 책 기반 커뮤니티 서비스입니다."
        />
        <meta property="fb:app_id" content="215662702997532" />
      </Helmet>
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/reading-log" component={ReadingLogPage} />
        <Route path="/@:username" component={UserPage} />
      </Switch>
      <Core />
    </>
  );
};

export default App;
