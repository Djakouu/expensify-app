import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpense extends React.Component {
    onSubmit = expense => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/')
    }
    onClick = () => {
        this.props.startRemoveExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <div className='page-header'>
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onClick}>
                        Remove Expense
                    </button>
                </div>
            </div>
        )
    }
}

// const Edit = (props) => ( 
//     <div>
//         <h1>Edit Expense</h1>
//         <ExpenseForm 
//             expense={props.expense}
//             onSubmit={(expense) => {
//                 props.dispatch(editExpense(props.expense.id, expense));
//                 props.history.push('/')
//             }}
//         />
//         <button onClick={() => {
//             props.dispatch(removeExpense({id: props.expense.id}));
//             props.history.push('/')
//         }
//         }>
//             Remove
//         </button>
//     </div>
// );

const mapStateToProps = (state, props) => ({
        expense: state.expenses.find(expense => expense.id === props.match.params.id)
});

const mapDispatchProps = (dispatch, props) => ({
        startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
        startRemoveExpense: data => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchProps)(EditExpense);