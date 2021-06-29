import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Services/Reducers/index';
const store = createStore(rootReducer);
console.log("store data", store)
//
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
