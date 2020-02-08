import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Terminal from './containers/TerminalController/TerminalController';
import OnePortfolio from './components/Portfolio/OnePortfolio';
import Admin from './containers/Admin/AdminContainer/AdminContainer';
import AuthenticatedComponent from './containers/Admin/AuthenticatedContainer/AuthenticatedContainer';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Terminal} />
        <Route path={'/portfolio/:portfolioId'} component={OnePortfolio} />
        <Route path={'/login'} exact component={Admin} />
        <AuthenticatedComponent>
          <Route path={'/admin'} exact component={Dashboard} />
        </AuthenticatedComponent>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
