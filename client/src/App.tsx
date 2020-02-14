import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import ReadingLogPage from 'pages/ReadingLogPage';
import HeaderContainer from 'containers/HeaderContainer';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/reading-log" component={ReadingLogPage} />
      </Switch>
    </>
  );
};

export default App;
