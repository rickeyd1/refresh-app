import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { store } from './Store';
import ChuckNorrisComponent from './components/chuck-norris/chuck-norris.component';
import NavComponent from './components/nav/nav.component';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <NavComponent />
      <div id="main-content-container">
        <Switch>
          <Route path="/chuck-norris" component={ChuckNorrisComponent} />
          <Route component={ChuckNorrisComponent} />
        </Switch>
      </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
