import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './Components/Pages/landingPage';
import AdminLogin from './Components/Pages/adminLogin'
import AdminLanding from './Components/Pages/adminLanding'
import Podcasts from './Components/Pages/podcasts'
export default (
    <Switch>
      <Route exact path ='/' component={LandingPage} />
      <Route path='/login' component={AdminLogin} />
      <Route path='/adminLanding' component={AdminLanding} />
      <Route path='/podcasts' component={Podcasts} />





    </Switch>
)
