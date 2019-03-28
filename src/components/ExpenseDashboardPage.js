import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const Expense = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default Expense;