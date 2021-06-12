import React from 'react';
import axios from 'axios';
import './App.css';

//for routes
import { Route, HashRouter as Router } from "react-router-dom";

//import components
import Header from '../Header/Header';


function App() {

  return (
    <Router>
    <div className='App'>
      <Header />

      <Route path='/' exact>
          <Feeling />
      </Route>

      <Route path='/understanding'>
          <Understanding />
      </Route>

      <Route path='/support'>
          <Support />
      </Route>

      <Route path='/Comment'>
          <Comment />
      </Route>

      <Route path='/review'>
          <Review />
      </Route>

      <Route path='/admin'>
          <Admin />
      </Route>
      
    </div>
    </Router>
  );
}

export default App;

