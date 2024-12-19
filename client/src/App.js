
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Login  from './components/lOGIN.JS';
import YouTubePlaylists from './components/YoutubePlaylists';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/playlists" component={YouTubePlaylists} />
      </Switch>
    </Router>
    );};

export default App;