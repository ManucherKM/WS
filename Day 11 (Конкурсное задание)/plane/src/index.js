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
  user: {
    logoImg: "https://images.unsplash.com/photo-1664096555683-3bd2d1ce9352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Test123",
    createdAt: "09-09-21",
    age: 20,
    email: "test@gmail.com",
    flying: [
      {
        place: 81,
        nameTrip: "Счастливый билет номер 123",
        date: "01-02-22",
        duration: 2.5,
        price: "150",
        where: "Россия",
        why: "Италия",
        flightNumber: "A144",
        urlImg: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
        id: 123
      },
      {
        place: 85,
        nameTrip: "Счастливый билет номер 321",
        date: "01-09-23",
        duration: "3",
        price: "1590",
        where: "Россия",
        why: "Италия",
        flightNumber: "A144",
        urlImg: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
        id: 1234
      },
      {
        place: 85,
        nameTrip: "Счастливый билет номер 321",
        date: "01-09-23",
        duration: "3",
        price: "1590",
        where: "Россия",
        why: "Италия",
        flightNumber: "A144",
        urlImg: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
        id: 14565234
      },
      {
        place: 85,
        nameTrip: "Счастливый билет номер 321",
        date: "01-09-23",
        duration: "3",
        price: "1590",
        where: "Россия",
        why: "Италия",
        flightNumber: "A144",
        urlImg: "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
        id: 1212312334
      },
    ]
  }
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "auth":
      return { ...state, register: true }
    case "exit":
      return { ...state, register: false, user: null }
    default:
      return state
  }

}

const store = createStore(reducer)



// function counterReducer(state = { value: 10 }, action) {
//   switch (action.type) {
//     case 'counter/incremented':
//       return { value: state.value + 1 }
//     case 'counter/decremented':
//       return { value: state.value - 1 }
//     default:
//       return state
//   }
// }

// let store = createStore(counterReducer)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();