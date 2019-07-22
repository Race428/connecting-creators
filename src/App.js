import React from 'react';
// import appStyles from './CSS/app.module.css'
import './CSS/generalStyles.css'
import {HashRouter} from 'react-router-dom'
import router from './router'
import Nav from './Components/Nav/Nav'
import {Provider} from 'react-redux'
import store from './Redux/Store'




function App() {
  
  return (
    <Provider store={store}>

   <HashRouter>
     
       <div className='pageView'>
       <Nav />
       {router} 
       </div>
   
  
   </HashRouter>
   </Provider>
  );
}

export default App;
