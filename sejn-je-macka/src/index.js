import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import cartReducer from './Store/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'

const store = createStore(cartReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
</Provider>, document.getElementById('root'));