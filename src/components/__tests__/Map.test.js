import React from 'react';
import {shallow} from 'enzyme'
import Map from '../Map';

describe('Map', function () {
    let mountedMap;

    beforeEach(() => {
        mountedMap = shallow(<Map />);
        // console.log(mountedMap.html())
    });

    it('renders without crashing', () => {
        let mountedMap = shallow(<Map />);
    });

    it('contain a image', () => {
        const img = mountedMap.find('img');
        expect(img.length).toBe(1);
    });

    it('display the none map when no params are given', () => {
        console.log(mountedMap.html());
        const defaultMap = mountedMap.find({ src: "images/none.png" });
        console.log(defaultMap.length);
        expect(defaultMap.length).toBe(1);
    });
});
