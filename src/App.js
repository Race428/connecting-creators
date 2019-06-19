import React from 'react';
import appStyles from './CSS/app.module.css'
import {HashRouter} from 'react-router-dom'
import router from './router'
import Nav from './Components/Nav/Nav'
// import Footer from './Components/footer'



function App() {
  return (
   <HashRouter>
     <div className={appStyles.app}>
       <Nav />
       <div className={appStyles.pageView}>
       {router}
       </div>
   
     </div>
   </HashRouter>
  );
}

export default App;
