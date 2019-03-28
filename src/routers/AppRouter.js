import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AddExpensePage from '../components/AddExpensePage';
import Edit from '../components/EditExpensePage';
import Expense from '../components/ExpenseDashboardPage';
import Header from '../components/Header';
import Help from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Expense} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={Edit} />
                <Route path="/help" component={Help} />
                <Route parh="/*" component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;