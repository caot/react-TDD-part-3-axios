import React from 'react';
import {shallow} from 'enzyme'
import Header from '../Header';

describe('Header', function () {
    let mountedHeader;

    beforeEach(() => {
        mountedHeader = shallow(<Header />);
    })

    it('renders without crashing', () => {
        let mountedHeader = shallow(<Header />);
    });

    it('renders a logo', () => {
        const logoImg = mountedHeader.find({ src : "images/wider-coffee-logo.png" });
        // the following line failed
        // const logoImg = mountedHeader.find('img [src="images/wider-coffee-logo.png"]');
        expect(logoImg.length).toBe(1);
    })

});
