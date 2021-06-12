import React from 'react';
// import axios from 'axios';
import './App.css';
// import {useEffect} from 'react';
// import {useDispatch} from 'react-redux';

//for routes
import { Route, HashRouter as Router } from "react-router-dom";

//import components
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Admin from '../Admin/Admin';




function App() {

  // useEffect(() => {

  // },[])

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

