import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './Components/Pages/landingPage';
import AdminLogin from './Components/Pages/adminLogin'
import AdminLanding from './Components/Pages/adminLanding'
import Podcasts from './Components/Pages/podcasts'
import Step1 from './Components/Pages/Store/step1'
import Step2 from './Components/Pages/Store/step2'


export default (
    <Switch>
      <Route exact path ='/' component={LandingPage} />
      <Route path='/login' component={AdminLogin} />
      <Route path='/adminLanding' component={AdminLanding} />
      <Route path='/podcasts' component={Podcasts} />
      <Route path='/shop/select-package' component={Step1} />
      <Route path='/shop/select-details' component={Step2} />







    </Switch>
)
