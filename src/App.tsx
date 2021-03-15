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
      <Route exact path='/links' component={Pages.Links}/>
      <Route exact path='/contact-me' component = {Pages.ContactMe}/>
    </Switch>
  );
}
export default App;