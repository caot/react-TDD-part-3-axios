import React from 'react';
import {shallow} from "enzyme";
import App from '../App';

// import StoreLocator from '../StoreLocator'

describe('App', function () {

  it('renders without crashing', () => {
    let mountedApp = shallow(<App />);
  });

  it('renders a StoreLocator', () => {
    let mountedApp = shallow(<App />);
    const locators = mountedApp.find('StoreLocator');
    expect(locators.length).toBe(1);
  });

});
