import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Redux management
import { Provider } from 'react-redux'
import { rootReducer } from './ReduxManager/ReduxMain';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
    <Provider store={rootReducer}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
