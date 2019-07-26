import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon'
import axios from 'axios';
import StoreLocator from '../StoreLocator';


describe('StoreLocator', function () {
    let mountedStoreLocator ;

    beforeEach( async () => {
        mountedStoreLocator = await shallow(<StoreLocator />);
        // console.log(mountedStoreLocator.html())
    })

    // it('calls axios.get in #componetsDidMount', () => {
    //     return mountedStoreLocator.instance().componentDidMount().then(() => {
    //         expect(axios.get).toHaveBeenCalled();
    //     });
    // })
    //
    // it('calls axios.get with correct url', () => {
    //     return mountedStoreLocator.instance().componentDidMount().then(() => {
    //         expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/data/shops.json');
    //     });
    // })
    //
    // it('updates state with api data', () => {
    //     return mountedStoreLocator.instance().componentDidMount().then(()=> {
    //         expect(mountedStoreLocator.state()).toHaveProperty('shops',
    //             [{
    //                 "location": "test location",
    //                 "addresss": "test address"
    //             }]
    //         );
    //     });
    // })
    //
    // it('renders without crashing', () => {
    //     let mountedStoreLocator = shallow(<StoreLocator />);
    // });
    //
    // it('renders a header', () => {
    //     const headers = mountedStoreLocator.find('Header');
    //     expect(headers.length).toBe(1);
    // });

    it('renders two buttons', async () => {
        let initial;
        let mounted;

        const component = mount(<StoreLocator />);

        initial = component.state()
        console.log(initial)

        await component.update()

        // console.log(component.html())
        // mounted = component.state()
        // console.log(mounted)

        const buttons = await component.update().find('Button');
        expect(buttons.length).toBe(3);
    });

    // it('renders a map', () => {
    //     const maps = mountedStoreLocator.find('Map');
    //     expect(maps.length).toBe(1);
    // });
});

// describe('chooseMap', function () {
//     it('updates this.state.currentMap using the location passed to it', () => {
//         let mountedStoreLocator = shallow(<StoreLocator />);
//         let mockEvent = {target: {value: 'testland'}};
//         mountedStoreLocator.instance().chooseMap(mockEvent);
//         // console.log(mountedStoreLocator.instance().state)
//         expect(mountedStoreLocator.instance().state.currentMap).toBe('testland.png');
//     })
// });
