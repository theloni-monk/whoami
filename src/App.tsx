import React from 'react'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import * as Pages from './pages'

const App = () => {
  return(
    <Switch>
      <Redirect exact from="/" to="/home"/>
      <Route exact path = '/home' component = {Pages.Home}/>
      <Route path='/links' component = {Pages.Links}/>
      <Route path='/contact-me' component = {Pages.Contacts}/>
    </Switch>
  );
}
export default App;