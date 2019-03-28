import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import uuid from 'uuid'

test('should set up add expense action object with default values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: 'That\'s it',
            amount: 0,
            note: '', 
            createdAt: 0,
            id: expect.any(String)
        }
    })
});

test('should set up add expense action object with provided values', () => {
    const action = addExpense({ 
            description: 'rent',
            amount: 1000,
            note: 'Note', 
            createdAt: 4000000000 
     });
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: 'rent',
            amount: 1000,
            note: 'Note', 
            createdAt: 4000000000,
            id: expect.any(String)
        }
    })
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