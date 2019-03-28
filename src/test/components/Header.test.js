import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json'
import Header from '../../components/Header';
//import ReactShallowRenderer from 'react-test-renderer/shollow'; REPLACED BY ENZYME

// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).tomatchSnapshot();
// }); REPLACED BY ENZYME

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />);
    //expect(wrapper.find('h1').text()).toBe('Expensify')
    expect(wrapper).toMatchSnapshot();
})