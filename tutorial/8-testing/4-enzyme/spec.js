import React from 'react';
import { render } from 'enzyme';
import { expect } from 'chai'

import Hello from './hello';
const name = "scott";
describe('Hello component', () => {
  it('renders a h1 with hello world', () => {
    const wrapper = render(<Hello name={name}/>);
    expect(wrapper.text()).to.contain(name);
  });
});