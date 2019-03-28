import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixtures/filters';
import moment from 'moment';

let wrapper, setStartDate, setEndDate, setTextFilter, sortByDate, sortByAmount;

beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    
    wrapper = shallow(
        <ExpenseListFilters 
        filters={altFilters} 
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount} 
        />);
});

test('should render Expense list filters with default data correctly', () => {
    wrapper.setProps({
        filters: filters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should render Expense list filters with alt data correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const value = 'bills'
    wrapper.find('input').simulate('change', {
        target: {
            value     
        }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith('bills');
});

test('should sort by date', () => {
    const value = 'date'
    wrapper.find('select').simulate('change', {
        target: {
            value     
        }
    });
    expect(sortByDate).toHaveBeenCalled();
});

test('should sort by amount', () => {
    const value = 'amount';
    wrapper.setProps({
        filters: filters
    });
    wrapper.find('select').simulate('change', {
        target: {
            value     
        }
    });
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle dates change', () => {
    const startDate = moment(0);
    const endDate = moment(0).add(3, 'days')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate, endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('should handle date focus change', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});

