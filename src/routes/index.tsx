import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import LandingPage from '../pages/LandingPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={LandingPage} />
  </Switch>
);

export default Routes;
