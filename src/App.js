import React from 'react'; 
import { HashRouter } from 'react-router-dom'; 
import Router from './Router';
import ButtonAppBar from './components/AppNavBar'

import './App.css';

function MusicApp() {
  return (
    <HashRouter>
      <ButtonAppBar/>
      <Router />
    </HashRouter>
  )
}

export default MusicApp;
