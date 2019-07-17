import React from 'react'
import {Switch, Route} from 'react-router-dom'
import LandingPage from './Components/Pages/landingPage';
import AdminLogin from './Components/Pages/adminLogin'
import AdminLanding from './Components/Pages/adminLanding'
import Podcasts from './Components/Pages/podcasts'
import Step1 from './Components/Pages/Store/step1'
import Step2 from './Components/Pages/Store/step2'
import Step3 from './Components/Pages/Store/step3'
import Step4 from './Components/Pages/Store/step4'
import Step5 from './Components/Pages/Store/step5'
import Step6 from './Components/Pages/Store/step6'
import Checkout from './Components/Pages/Store/checkout'





export default (
    <Switch>
      <Route exact path ='/' component={LandingPage} />
      <Route path='/login' component={AdminLogin} />
      <Route path='/adminLanding' component={AdminLanding} />
      <Route path='/podcasts' component={Podcasts} />
      <Route path='/shop/select-package' component={Step1} />
      <Route path='/shop/select-details' component={Step2} />
      <Route path='/shop/select-aspect-ratio' component={Step3} />
      <Route path='/shop/select-style' component={Step4} />
      <Route path='/shop/select-font' component={Step5} />
      <Route path='/shop/select-distribution-options' component={Step6} />
      <Route path='/shop/checkout' component={Checkout} />










    </Switch>
)
