import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import PrivateRoute from './PrivateRoute';

import LoginPage from '../components/LoginPage'
import AddExpensePage from '../components/AddExpensePage';
import Edit from '../components/EditExpensePage';
import Expense from '../components/ExpenseDashboardPage';
import Help from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createBrowserHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={Expense} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={Edit} />
                <Route path="/help" component={Help} />
                <Route parh="/*" component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;