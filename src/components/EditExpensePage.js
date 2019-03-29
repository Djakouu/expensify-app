import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpense extends React.Component {
    onSubmit = expense => {
        this.props.editExpense(this.props.expense.id, expense);
        this.props.history.push('/')
    }
    onClick = () => {
        this.props.removeExpense({id: this.props.expense.id})
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <h1>Edit Expense</h1>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}>
                    Remove
                </button>
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
        editExpense: (id, expense) => dispatch(editExpense(id, expense)),
        removeExpense: data => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchProps)(EditExpense);