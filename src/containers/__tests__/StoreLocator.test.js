import React from 'react';
import ReactDOM from 'react-dom';

import {shallow} from 'enzyme'
import StoreLocator from '../StoreLocator';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StoreLocator />, div);
});

it('renders without crashing', () => {
    let mountedStoreLocator = shallow(<StoreLocator />);
});