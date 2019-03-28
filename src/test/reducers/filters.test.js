import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should set up default reducer', () => {
    const output = filtersReducer(undefined, { type: '@@INIT' })
    expect(output).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'rent',
    }
    const output = filtersReducer(undefined, action)
    expect(output.text).toBe('rent')
});

test('should sort by date', () => {
    const output = filtersReducer(undefined, { type: 'SORT_BY_DATE'})
    expect(output.sortBy).toBe('date')
});

test('should sort by amount', () => {
    const state = {
        text: '',
        sortBy: 'date', //amount or date
        startDate: undefined,
        endDate: undefined
    }
    const output = filtersReducer(state, { type: 'SORT_BY_AMOUNT'})
    expect(output.sortBy).toEqual('amount')
});

test('should set start date', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment().startOf('month'),
    }
    const output = filtersReducer(undefined, action)
    expect(output.startDate).toEqual(moment().startOf('month'))
});

test('should set end date', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment().endOf('month')
    }
    const output = filtersReducer(undefined, action)
    expect(output.endDate).toEqual(moment().endOf('month'))
});