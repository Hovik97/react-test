import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import { rootReducer } from './redux/rootReducer';
import App from './App';

const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    reduxDevtoolsExtension()
));

function reduxDevtoolsExtension() {
    return typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined"
        ? a => a
        : window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__();
}

const app = (
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
);

render(
  app,
  document.getElementById('root')
);


reportWebVitals();
