import React from 'react';
import { shallow } from 'enzyme';
import Test from './test.react';

describe('Test', function() {
  it('causes error', function() {
    shallow(<Test />);
  });
});

