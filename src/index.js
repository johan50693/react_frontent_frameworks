import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './pages/App';
import {Provider} from 'react-redux'
import store from './redux/store';
import { NavBar } from './components/navBar';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <>
      <NavBar />
      <App />
      </>
    </Router>
  </Provider>,
  document.getElementById('root')
);
