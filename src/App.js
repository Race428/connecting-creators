import React from 'react';
import appStyles from './CSS/app.module.css'
import './App.css';

function App() {
  return (
    <div className={appStyles.app}>
      <header className={appStyles.header}>
        <nav className={appStyles.nav}>
          <img src ='https://static1.squarespace.com/static/5c10a2cafcf7fd0f32a876a7/t/5c79ae4d71c10b7dcaa7d564/1548658214654/' alt ='logo' id={appStyles.logo}/> 
        </nav>
      </header>
    </div>
  );
}

export default App;
