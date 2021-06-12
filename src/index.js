import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';



// ⬇ What we need to import
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

// ⬇ The Reducers

const pizzas = (state =[], action) => {
  if(action.type === 'SHOW_PIZZAS') {
    console.log(action.payload);
    return action.payload;
  }
  return state;
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
