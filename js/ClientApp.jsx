import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './Landing';
import LightSwitchOff from './LightSwitchOff';
import LightSwitchOn from './LightSwitchOn';
import NotFound from './NotFound';

const App = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/light-switch-off' component={LightSwitchOff} />
        <Route exact path='/light-switch-on' component={LightSwitchOn} />
        <Route component={NotFound} />
      </Switch>
  </BrowserRouter>
);

render(<App />, document.getElementById('app'));
