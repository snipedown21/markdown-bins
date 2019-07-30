import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/App';
import BinsMain from './components/bins/BinsMain';
import BinsList from './components/bins/BinsList';
import { Bins } from '../imports/collections/bins';

const routes = (
  <BrowserRouter>
        <App/>
        <Switch>
        <Route exact path="/" component={BinsList} />
        <Route exact path="/bins/:binId" component={BinsMain} />
      </Switch>
</BrowserRouter>
);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
