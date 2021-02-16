import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Content, Contents } from './pages';
import './App.css';

const history = createBrowserHistory();


const App = () => {

  localStorage.setItem('collection', JSON.stringify([]));

  return (
      <BrowserRouter history={history}>
          <div className='common_back_color'>
              <Switch>
                  <Route path='/contents' component={ Contents } />
                  <Route path='/content/:id' component={ Content } />
                  <Route path='/' render={ () => <Redirect to='/contents' /> } />
              </Switch>
          </div>
      </BrowserRouter>
  );
}

export default App;