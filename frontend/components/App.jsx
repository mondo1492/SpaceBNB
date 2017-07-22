import React from 'react';
import GreetingsContainer from './greeting/greetings_container';
import SessionFormContainer from './session/session_forms_container';
import { ProtectedRoute } from '../util/route_util';
import { Route, Switch, Link } from 'react-router-dom';
import  LeftLowerNav  from './nav_bar/left_lower_nav';
import MainDisplayContainer from './main_display/main_display_container';
import CreateRoomContainer from './rooms/room_container';
import GeoLocation from './rooms/geo_location';
import GoogleMap from './google_map/map';

const App = () => (
  <div>
    <header>
      <GreetingsContainer/>
      <LeftLowerNav/>
    </header>
    <Switch>
      <Route exact path="/" component={ MainDisplayContainer } />
      <ProtectedRoute path="/create" component={ CreateRoomContainer }/>

    </Switch>
  </div>
);

export default App;
