import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import store from './modules/store';
import { Provider } from 'react-redux';
import WebSocketConnection from './modules/WebSocketConnection';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <WebSocketConnection host={`ws://ws.channels.honeycombpizza.link/ws/notify/`}>
        <App />
      </WebSocketConnection>      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
