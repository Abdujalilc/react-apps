import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyStore from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={MyStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);