import React from 'react';
import { connect } from 'react-redux'
import numeral from "numeral";
import '../adjustments/numeral-locale-fr'
import getVisibleExpenses from '../selectors/expenses';
import { getExpensesTotal } from '../selectors/expenses-total';

export const ExpensesSummary = (props) => (
    <div>
        <h1>Viewing {props.expenses.length < 2 ? props.expenses.length + ' expense ' : props.expenses.length + ' expenses '} 
           totalling {numeral(getExpensesTotal(props.expenses) / 100).format('0,0.00 $')} 
        </h1>
    </div>
);

const mapStatetoProps = state => ({
    expenses: getVisibleExpenses(state.expenses, state.filters)
});

export default connect(mapStatetoProps)(ExpensesSummary);