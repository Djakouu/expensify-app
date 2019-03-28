import expensesReducer from '../../reducers/expenses';

test('should set up default reducer', () => {
    const output = expensesReducer([], { type: '@@INIT'});
    expect(output).toEqual([])
});

test('should add expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            descrption: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: 'abc'
        }
    }
    const output = expensesReducer([], action);
    expect(output).toEqual([action.expense])
});

test('should remove expense in case of existing id', () => {
    const state = [{
            descrption: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: 'abc'
        }]
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 'abc'
    }
    const output = expensesReducer(state, action);
    expect(output).toEqual([])
});

test('should remove expense in case of NO existing id', () => {
    const state = [{
            descrption: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: 'abc'
        }]
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '123'
    }
    const output = expensesReducer(state, action);
    expect(output).toEqual(state)
});

test('should edit expense in case of id match', () => {
    const state = [{
            descrption: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: 'abc'
        }]
    const action = {
        type: 'EDIT_EXPENSE',
        id: 'abc',
        updates: {
            descrption: 'rent',
            note: 'my rent',
            amount: 2000,
            createdAt: 4000,
        }
    }
    const output = expensesReducer(state, action);
    expect(output).toEqual([{...state[0], ...action.updates}])
});

test('should edit expense in case of NO id match', () => {
    const state = [{
            descrption: '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: 'abc'
        }]
    const action = {
        type: 'EDIT_EXPENSE',
        id: '123',
        updates: {
            descrption: 'rent',
            note: 'my rent',
            amount: 2000,
            createdAt: 4000,
        }
    }
    const output = expensesReducer(state, action);
    expect(output).toEqual([{...state[0]}])
});