import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/index'
import Signin from './pages/Siginin'
import About from './pages/about'
import Signup from './pages/signup'
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Payments from './pages/Payments';
import Inbox from './pages/Inbox';
import Explore from './pages/Explore';
import Home from './pages/Home';
import Preview from './pages/Preview';
import TourSite from './pages/TourSite';
import Subscription from './pages/Subscription';
import SetupPayments from './pages/SetupPayments';
import VrScreen from './pages/VrScreen';
import Pages from './pages/pages';

const BaseRouter = () => (
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/sign-in' component={Signin} />
      <Route path='/about' component={About} />
      <Route path='/sign-up' component={Signup} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/profile' component={Profile} />
      <Route path='/payments' component={Payments} />
      <Route path='/inbox' component={Inbox} />
      <Route path='/explore' component={Explore} />
      <Route path='/home' component={Home} />
      <Route path='/preview' component={Preview} />
      <Route path='/tour-site' component={TourSite} />
      <Route path='/subscription' component={Subscription} />
      <Route path='/setup-payments' component={SetupPayments} />
      <Route path='/vr-screen' component={VrScreen} />
      <Route path='/pages' component={Pages} />
    </Switch>
  );
export default BaseRouter;