import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';
import Header from 'components/base/Header';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={MainPage} exact />
      </Switch>
    </>
  );
};

export default App;
