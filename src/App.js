import React from 'react';
import appStyles from './CSS/app.module.css'
import {HashRouter} from 'react-router-dom'
import router from './router'
import Nav from './Components/Nav/Nav'


function App() {
  return (
   <HashRouter>
     <div className={appStyles.app}>
       <Nav />
       {router}
     </div>
   </HashRouter>
  );
}

export default App;
