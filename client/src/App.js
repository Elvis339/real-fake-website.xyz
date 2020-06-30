import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthenticatedComponent from './containers/Admin/AuthenticatedContainer/AuthenticatedContainer';
import Terminal from './screens/Terminal/Terminal';
import PortfolioItem from './screens/Portfolio/PortfolioItem';
import Admin from './containers/Admin/AdminContainer/AdminContainer';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Terminal} />
        <Route path={'/portfolio/:portfolioId'} component={PortfolioItem} />
        <Route path={'/login'} exact component={Admin} />
        <AuthenticatedComponent>
          <Route path={'/admin'} exact component={Dashboard} />
        </AuthenticatedComponent>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
