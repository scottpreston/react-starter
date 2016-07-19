import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai'

import Hello from '../src/components/Hello';

describe('<Hello />', () => {
  it('renders a div with hello world', () => {
    const wrapper = render(<Hello />);
    expect(wrapper.text()).to.contain('hello world')
  });

});
