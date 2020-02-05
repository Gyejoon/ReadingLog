import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from 'pages/MainPage';

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
    </Switch>
  );
};

export default App;
