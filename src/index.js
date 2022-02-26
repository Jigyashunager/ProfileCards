import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import mystore from '../src/redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={mystore}>
    <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

