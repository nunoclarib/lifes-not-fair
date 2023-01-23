import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";

import selectReducer from './redux/reducer/selectReducer';

function saveToLocalStorage(state){
  try{
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)

  }
  catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try{
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) return undefined
    return JSON.parse(serializedState)
  }
  catch(e){
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage() // presiste estado

const store = createStore(
  selectReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(()=> saveToLocalStorage(store.getState()))


ReactDOM.render(
  <Provider store={store}>
  <Router>
    <Routes>
      <Route path='/' exact element={<App />} />
    </Routes>
  </Router>
  </Provider>
  ,document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
