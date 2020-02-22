import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import ReadingLogPage from 'pages/ReadingLogPage';
import HeaderContainer from 'containers/base/HeaderContainer';
import Core from 'containers/base/Core';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/reading-log" component={ReadingLogPage} />
      </Switch>
      <Core />
    </>
  );
};

export default App;
