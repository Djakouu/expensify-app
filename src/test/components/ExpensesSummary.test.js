import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render ExpensesSummary with one expense correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with two expenses correctly', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0], expenses[1]]} />);
    expect(wrapper).toMatchSnapshot();
});
