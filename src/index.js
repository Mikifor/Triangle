import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./State/state"

const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderDOM = () => {root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
)
};

rerenderDOM();

store.observer(rerenderDOM);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
