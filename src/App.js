import React from 'react'; 
import { BrowserRouter } from 'react-router-dom'; 
import Router from './Router';
import ButtonAppBar from './components/AppNavBar'

import './App.css';

function MusicApp() {
  return (
    <BrowserRouter>
      <ButtonAppBar/>
      <Router />
    </BrowserRouter>
  )
}

export default MusicApp;
