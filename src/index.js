import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import configureStore from './store/configureStore.js';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
   document.getElementById('root'));

registerServiceWorker();
