import React from 'react';
import { shallow } from 'enzyme';
import Regissuccess from './regissuccess';

describe('<Regissuccess />', () => {
  test('renders', () => {
    const wrapper = shallow(<Regissuccess />);
    expect(wrapper).toMatchSnapshot();
  });
});
