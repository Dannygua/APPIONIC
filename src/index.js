import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "firebase/database";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDanIi4wL57e2PytIUJx9hlqXwzA16xpkg",
    authDomain: "nuevo-poryecto11111111.firebaseapp.com",
    databaseURL: "https://nuevo-poryecto11111111-default-rtdb.firebaseio.com",
    projectId: "nuevo-poryecto11111111",
    storageBucket: "nuevo-poryecto11111111.appspot.com",
    messagingSenderId: "691264158506",
    appId: "1:691264158506:web:d0e5706643c94ffe0d3c53",
    measurementId: "G-L19D1SEMJD"
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
export const auth = firebase.auth;
export const db = firebase.database();