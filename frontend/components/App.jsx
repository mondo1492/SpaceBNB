import React from 'react';
import GreetingsContainer from './greeting/greetings_container';
import SessionFormContainer from './session/session_forms_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>Welcom to Space BnB</h1>
      <GreetingsContainer/>
    </header>
    <Route path="/login" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
