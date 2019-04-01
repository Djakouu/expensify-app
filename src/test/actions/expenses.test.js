import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addExpense, startAddExpense, editExpense, removeExpense, startRemoveExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

test('should setup add expense action object with provided values', () => {
    const action = addExpense(expenses[0]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
        })
});

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expenseData[id]= { description, note, amount, createdAt };
    });
database.ref('expenses').set(expenseData).then(() => done());
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


test('should setup remove expense from store', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});


test('should start remove expense from database and store', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`expenses/${id}`).once('value')
        }).then(snapshot => {
            expect(snapshot).toBeFalsy();
            done();
        })
        done();
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note added' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        updates: {
            note: 'New note added'
        },
        id: '123abc'
    })
});

test('should setup set expenses action object with provided values', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
        })
});

test('should fetch expenses from firebase', () => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});