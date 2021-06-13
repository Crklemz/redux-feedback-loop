import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

//Reducers
const feedback = (state =[], action) => {
    if(action.type === 'ADD_FEEDBACK') {
        return [...state, action.payload];
  }
  return state;
}

//Create store
const store = createStore(
    combineReducers({
      feedback
    }),
    applyMiddleware(
      logger
    )
)
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

registerServiceWorker();

