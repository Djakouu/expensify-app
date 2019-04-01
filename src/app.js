//--------------App.JS-------------------------
//---------------------------------------------

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { startSetExpenses } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});





/*--------------REDUX 101-------------------------
--------------------------------------------*/

// import { createStore, combineReducers } from 'redux';
// import uuid from 'uuid';


 //ADD EXPENSE
// const addExpense = (
//     { 
//         description = 'That\'s it',
//         amount = 0,
//         note = '', 
//         createdAt = 0 
//     } = {}
//     ) => ({
//     type: 'ADD_EXPENSE',
//     expense: {
//         description,
//         amount,
//         note,
//         createdAt,
//         id: uuid()
//     }
    
// });

// // REMOVE EXPENSE
// const removeExpense = (id) => ({
//     type: 'REMOVE_EXPENSE',
//     expense: {
//         id
//     }
// })

// // EDIT EXPENSE
// const editExpense = (id, updates) => ({
//     type: 'EDIT_EXPENSE',
//     updates,
//     id
// })

// // SET TEXT FILTER
// const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT_FILTER',
//     text
// });

// // SORT BY DATE
// const sortByDate = () => ({
//     type: 'SORT_BY_DATE',
// });

// // SORT BY AMOUNT
// const sortByAmount= () => ({
//     type: 'SORT_BY_AMOUNT',
// });

// // SET START DATE
// const setStartDate = (startDate) => ({
//     type: 'SET_START_DATE',
//     startDate
// });

// // SET END DATE
// const setEndDate = (endDate) => ({
//     type: 'SET_END_DATE',
//     endDate
// });


// // EXPENSES REDUCER
// const expensesReducerDefaultState = [];
// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'ADD_EXPENSE':
//             return [...state, action.expense]
//         case 'REMOVE_EXPENSE':
//             return state.filter(({ id }) => id !== action.expense.id)
//         case 'EDIT_EXPENSE':
//             return state.map(expense => {
//                 if (expense.id === action.id) {
//                     return { ...expense, ...action.updates }
//                 }
//                 else
//                     return expense;
//             });
//         default:
//             return state;
//     }
// };

// //FILTERS REDUCER
// const filtersReducerDefaultState = {
//     text: '',
//     sortBy: 'amount', //amount or date
//     startDate: undefined,
//     endDate: undefined
// };
// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//     switch (action.type) {
//         case 'SET_TEXT_FILTER':
//             return { ...state, text: action.text }
//         case 'SORT_BY_DATE':
//             return { ...state, sortBy: 'date' }
//         case 'SORT_BY_AMOUNT':
//             return { ...state, sortBy: 'amount' }
//         case 'SET_START_DATE':
//             return { ...state, startDate: action.startDate }
//         case 'SET_END_DATE':
//             return { ...state, endDate: action.endDate }
//         default:
//             return state; 
//     }
// };

// // GET VISIBLE EXPENSES
// const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//     return expenses.filter(expense => {
//         const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
//         const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
//         const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
//         return startDateMatch && endDateMatch && textMatch
//     }).sort((a, b) => {
//         if (sortBy === 'date')
//             return a.createdAt < b.createdAt ? 1 : -1;
//         else 
//             return a.amount < b.amount ? 1 : -1;
//     })
    
//     // return expenses.filter(({ description, note }) => description === text || note === text)
// };

// // STORE CREATION   
// const store = createStore(
//     combineReducers({
//         expenses: expensesReducer,
//         filters: filtersReducer
//     })
// );

// store.subscribe (() => {
//     const state = store.getState();
//     // console.log(state.expenses);
//     // console.log(state.filters);
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// const expenseOne = store.dispatch(addExpense({ description: 'food', amount: 122, createdAt: 12222}));
// const expenseTwo = store.dispatch(addExpense({description: "rent", amount: 5 }));
// const expenseThree = store.dispatch(addExpense({description: "kh khgqs rent kjh", amount: 59, note: "rent", createdAt: -99 }));
// const expenseFour = store.dispatch(addExpense({description: "lkjrent", amount: 59, note: "food", createdAt: 300 }));
// const expenseThree = store.dispatch(addExpense({description: "rent", amount: 7 }));
// const expenseFour = store.dispatch(addExpense({description: "food", amount: 9 }));
// const expenseFive = store.dispatch(addExpense({note: "food", amount: -11 }));
// const expenseSix = store.dispatch(addExpense({note: "rent", amount: - 13}));

// store.dispatch(removeExpense(expenseOne.expense.id));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 22 }))
// store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())
// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(500))
// store.dispatch(setEndDate())

const demoState = {
    expenses: [{
        id: 'kuhkjhjfkuh',
        description: 'May rent',
        note: 'This is the final payment for that adress',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amont', //amount or date
        startDate: undefined,
        endDate: undefined
    }
}






/*--------------REDUX 101-------------------------
--------------------------------------------*/

// import { createStore } from 'redux';

// const incrementCount = ({ incrementBy = 1 } = {}) => ({
//     type: 'INCREMENT',
//     incrementBy
// });

// const decrementCount = ({ decrementBy = 1 } = {}) => ({
//     type: 'DECREMENT',
//     decrementBy
// });

// const resetCount = () => ({
//     type: 'RESET',
// });

// const setCount = ({ count = 100 } = {}) => ({
//     type: 'SET',
//     count
// });

// // REDUCERS
// const countReducer = (state = { count: 0 }, action) => {
    
//     switch (action.type) {
//         case 'INCREMENT':
//             return { count: state.count + action.incrementBy }
//         case 'DECREMENT':
//             return { count: state.count - action.decrementBy }
//         case 'RESET':
//             return { count: 0}
//         case 'SET': 
//             return { count: action.count }
//         default:
//             return state;
//     }
// };

// const store = createStore (countReducer);

// store.subscribe(() => {
//     console.log(store.getState());
// })


// store.dispatch(incrementCount())
// store.dispatch(incrementCount({ incrementBy: 5 }))

// store.dispatch(decrementCount())
// store.dispatch(decrementCount({ decrementBy: 10 }))


// store.dispatch(resetCount())
// store.dispatch(setCount())









///////////////////////
// /*--------------COUNTER-------------------------
////////////////////////

// class Counter extends React.Component {
//     constructor(props){
//         super(props);
//         this.handlePlusOne = this.handlePlusOne.bind(this)
//         this.handleMinusOne = this.handleMinusOne.bind(this)
//         this.handleReset = this.handleReset.bind(this)
//         this.state = {
//             count: 0
//         }
//     }

//     componentDidMount() {
//         try {
//             const stringCount = localStorage.getItem('count');
//             const count = parseInt(stringCount, 10);
    
//             if (!isNaN(count))
//             this.setState(() => ({ count })) 
//         } catch (e) {

//         }
        
//     }

//     componentDidUpdate(prevProps, prevState)  {
//         if (prevState.count !== this.state.count)
//         localStorage.setItem('count', this.state.count);
//     }

//     handlePlusOne() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             };
//         });
//     }

//     handleMinusOne() {
//         this.setState((prevState) => {
//             return {
//                 count: prevState.count - 1
//             };
//         });
//     }

//     handleReset() {
//         this.setState(() => {
//             return {
//                 count: 0
//             };
//         });
//     }

//     render(){
//         return (
//             <div>
//                 <h1>Count: {this.state.count}</h1>
//                 <button onClick={this.handlePlusOne}>+1</button>
//                 <button onClick={this.handleMinusOne}>-1</button>
//                 <button onClick={this.handleReset}>reset</button>
//             </div>
//         );
//     }
// }



// ReactDOM.render(<Counter/>, document.getElementById('app'))

// let visibility = false;


// const onToggole = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
// const appRoot = document.getElementById('app');
// const template = (
//     <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={onToggole}>
//         {visibility ? 'Hide details' : 'Show details'}
//         </button>
//         {visibility && <p>Hey! I'm here again</p>}

//     </div>
// );

// ReactDOM.render(template, appRoot);
// }

// render();