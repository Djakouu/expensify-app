import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
    {
        description: 'rent',
        amount: 100,
        createdAt: 0,
        note: 'Note 1',
        id: 1
    },
    {
        description: 'gas',
        amount: 200,
        createdAt: moment(0).subtract(4, 'days').valueOf(),
        note: 'Note 2',
        id: 2
    },
    {
        description: 'water',
        amount: 300,
        createdAt: moment(0).add(4, 'days').valueOf(),
        note: 'Note 3',
        id: 3   
    }
]



test('should filter by text value', () => {
    const filters = {
        text: 'e',
        sortBy:'',
        startDate: undefined,
        endDate: undefined
    }
    const action = selectExpenses(expenses, filters)
    expect(action).toEqual([ expenses[2], expenses[0]])
});

test('should filter by start date', () => {
    const filter = {
        text: '',
        sortBy:'',
        startDate: moment(0),
        endDate: undefined
    }
    const action = selectExpenses(expenses, filter)
    expect(action).toEqual([ expenses[2], expenses[0]])
});

test('should filter by end date', () => {
    const filter = {
        text: '',
        sortBy:'',
        startDate: undefined,
        endDate: moment(0)
    }
    const action = selectExpenses(expenses, filter)
    expect(action).toEqual([ expenses[1], expenses[0]])
});

test('should sort by date', () => {
    const filter = {
        text: '',
        sortBy:'date',
        startDate: undefined,
        endDate: undefined
    }
    const action = selectExpenses(expenses, filter)
    expect(action).toEqual([ expenses[2], expenses[0], expenses[1]])
});

test('should sort by amount', () => {
    const filter = {
        text: '',
        sortBy:'amount',
        startDate: undefined,
        endDate: undefined
    }
    const action = selectExpenses(expenses, filter)
    expect(action).toEqual([ expenses[2], expenses[1], expenses[0]])
});