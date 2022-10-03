import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom"
import { createStore } from 'redux'
import { Provider } from 'react-redux';

const defaultState = {
  register: false,
  user: null
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "auth":
      return { ...state, register: true, user: action.newUser }
    case "exit":
      return { ...state, register: false, user: null }
    default:
      return state
  }

}

const store = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

reportWebVitals();