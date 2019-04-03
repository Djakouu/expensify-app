import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

//import ReactShallowRenderer from 'react-test-renderer/shollow'; REPLACED BY ENZYME

// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     expect(renderer.getRenderOutput()).tomatchSnapshot();
// }); REPLACED BY ENZYME

// let wrapper, startLogout;

// beforeEach(() => {
//     startLogout = jest.fn();
    
// });

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => { }} />);
    //expect(wrapper.find('h1').text()).toBe('Expensify')
    expect(wrapper).toMatchSnapshot();
})

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});