import React from 'react';
import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import { Alert } from './components/Alert';
import { Navbar } from './components/Navbar';
import { AlertState } from './context/alert/AlertState';
import { FirebaseState } from './context/firebase/FirebaseState';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Pass } from './pages/Pass';

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
            <Navbar /> 
            <div className="container pt-4">
              <div className="row">
                <div className="col-sm-12">
                <Alert />
                <Switch>
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/pass'} exact component={Pass} />
                    <Route path={'/about'} component={About} />
                </Switch>
                </div>
              </div>
            </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
