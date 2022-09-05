import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App';
// import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.scss';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers';
import TestImmer from './immer/TestImmer';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
    <TestImmer />
  </Provider>
  // </React.StrictMode>
)
