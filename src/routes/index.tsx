import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" component={LandingPage} />
  </Switch>
);

export default Routes;
