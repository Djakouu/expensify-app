import React from 'react';
import { shallow } from 'enzyme';
import Expense from '../../components/ExpenseDashboardPage';

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<Expense />);
    expect(wrapper).toMatchSnapshot();
})
