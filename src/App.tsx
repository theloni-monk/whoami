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
      <Redirect exact from={process.env.PUBLIC_URL+"/"} to={process.env.PUBLIC_URL+"/home"}/>
      <Route exact path = {process.env.PUBLIC_URL+'/home'} component = {Pages.Home}/>
      <Route exact path={process.env.PUBLIC_URL+'/links'} component={Pages.Links}/>
      <Route exact path={process.env.PUBLIC_URL+'/contact-me'} component = {Pages.ContactMe}/>
    </Switch>
  );
}
export default App;