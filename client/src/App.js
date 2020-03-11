import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Terminal from './containers/TerminalController/TerminalController';
import ViewPortfolio from './components/ViewPortfolio/ViewPortfolio';
import Admin from './containers/Admin/AdminContainer/AdminContainer';
import AuthenticatedComponent from './containers/Admin/AuthenticatedContainer/AuthenticatedContainer';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'antd/dist/antd.css';
import 'react-quill/dist/quill.snow.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Terminal} />
        <Route path={'/portfolio/:portfolioId'} component={ViewPortfolio} />
        <Route path={'/login'} exact component={Admin} />
        <AuthenticatedComponent>
          <Route path={'/admin'} exact component={Dashboard} />
        </AuthenticatedComponent>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
