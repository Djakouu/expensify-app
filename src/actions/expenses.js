import uuid from 'uuid'

export const addExpense = (
    { 
        description = 'That\'s it',
        amount = 0,
        note = '', 
        createdAt = 0 
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        description,
        amount,
        note,
        createdAt,
        id: uuid()
    }
    
});

// REMOVE EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    updates,
    id
})