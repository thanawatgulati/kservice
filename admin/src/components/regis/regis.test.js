import React from 'react';
import { shallow } from 'enzyme';
import Regis from './regis';

describe('<Regis />', () => {
  test('renders', () => {
    const wrapper = shallow(<Regis />);
    expect(wrapper).toMatchSnapshot();
  });
});
