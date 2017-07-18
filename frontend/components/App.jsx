import React from 'react';
import GreetingsContainer from './greeting/greetings_container';
import SessionFormContainer from './session/session_forms_container';
import { AuthRoute } from '../util/route_util';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Welcom to Space BnB</h1>
      <GreetingsContainer/>
    </header>
    <AuthRoute path="/login" component={SessionFormContainer} />
    <AuthRoute path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
