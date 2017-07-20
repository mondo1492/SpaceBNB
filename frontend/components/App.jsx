import React from 'react';
import GreetingsContainer from './greeting/greetings_container';
import SessionFormContainer from './session/session_forms_container';
import { AuthRoute } from '../util/route_util';
import { Route, Switch } from 'react-router-dom';
import  LeftLowerNav  from './nav_bar/left_lower_nav';

const App = () => (
  <div>
    <header>
      <GreetingsContainer/>
      <LeftLowerNav/>
    </header>
    TEST

  </div>
);

export default App;

// <Switch>
//   <AuthRoute path="/login" component={SessionFormContainer} />
//   <AuthRoute path="/signup" component={SessionFormContainer} />
// </Switch>
