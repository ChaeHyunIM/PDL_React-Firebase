import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Routes';
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase";

const root = ReactDOM.createRoot(document.getElementById('root'));
initializeApp(firebaseConfig);
root.render(
  // <React.StrictMode>
    <Router />
  // </React.StrictMode>
);
