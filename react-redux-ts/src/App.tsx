import React from 'react';
import Home from './components/base/Home';
import { Switch, Route } from 'react-router';
import HeaderContainer from './containers/header/HeaderContainer';

const App = () => {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </>
  );
};

export default App;
