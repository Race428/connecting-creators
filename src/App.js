import React from 'react';
import appStyles from './CSS/app.module.css'
import {HashRouter} from 'react-router-dom'
import router from './router'
import Nav from './Components/Nav/Nav'
import {Provider} from 'react-redux'
import store from './Redux/Store'




function App() {
  return (
    <Provider store={store}>

   <HashRouter>
     <div className={appStyles.app}>
       <Nav />
       <div className={appStyles.pageView}>
       {router}
       </div>
   
     </div>
   </HashRouter>
   </Provider>
  );
}

export default App;
