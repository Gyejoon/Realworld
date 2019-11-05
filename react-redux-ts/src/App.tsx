import React from 'react';
import { Switch, Route } from 'react-router';
import HeaderContainer from './containers/header/HeaderContainer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import SettingsPage from './pages/SettingsPage';
import EditorPage from './pages/EditorPage';
import ProfilePage from './pages/ProfilePage';
import ArticlePage from './pages/ArticlePage';

const App = () => {
  return (
    <>
      <HeaderContainer />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/settings" component={SettingsPage} />
        <Route path="/editor" component={EditorPage} />
        <Route path="/@:username" component={ProfilePage} />
        <Route path="/article/:slug" component={ArticlePage} />
      </Switch>
    </>
  );
};

export default App;
