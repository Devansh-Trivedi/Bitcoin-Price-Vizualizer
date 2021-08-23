import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Home from './Home';
import Ether from './Ether';
import Litecoin from './Litecoin';
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Tron from './Tron';





  function App() {
    return (
      <BrowserRouter>
        
        <Route path="/" >
        <Home />
        </Route>
        <Route path="/Ether">
          <Ether />
        </Route>
        <Route path="/Litecoin">
          <Litecoin />
        </Route>
        <Route path="/Tron">
          <Tron />
        </Route>
        
      </BrowserRouter>
    );
  }
  
  export default App;
  