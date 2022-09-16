import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import './styles/index.css';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store/index';




// Put any other imports below so that CSS from your
// components takes precedence over default styles.
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
   <BrowserRouter>
   <Provider store = {store}>
    <React.StrictMode>
    <App/>
    </React.StrictMode>
    </Provider>
   </BrowserRouter>

,document.getElementById('root'));

registerServiceWorker();

