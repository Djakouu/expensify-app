import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, startAddExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

// test('should set up add expense action object with default values', () => {
//     const action = startAddExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '',
//             amount: 0,
//             note: '', 
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// });

test('should set up add expense action object with provided values', () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
        })
});

const createMockStore = configureMockStore([thunk]);


test('should add expense to database and store with default values', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        }).then(snapshot => {
            expect(snapshot.val()).toEqual(expenseData)
            done();
    });
});

test('should add expense to database and store with default values', (done) => {
    const store = createMockStore({});
    const expense = {
        description: '',
        amount: 0,
        note: '', 
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expense
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        }).then(snapshot => {
            expect(snapshot.val()).toEqual(expense);
            done();
    });
});

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should set up edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note added' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        updates: {
            note: 'New note added'
        },
        id: '123abc'
    })
});