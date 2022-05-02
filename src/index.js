import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClassCondtionalMount from './ClassCondtionalMount';
import Routing from './Routing'
import Guviapp from './Guviapp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Body from './cart/Body';

ReactDOM.render(
  <React.StrictMode>
    <Body/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
//<App componentName={"FunctionalComponent"}/>
//<ClassCondtionalMount componentName={"classComponent"}/> 
//  <Routing/>