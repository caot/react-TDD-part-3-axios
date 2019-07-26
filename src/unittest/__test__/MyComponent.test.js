import React, {Component} from 'react';
import { shallow } from 'enzyme'
import sinon from 'sinon'
import MyComponent from '../MyComponent'

describe('rendering', () => {
    let wrapper, showUrl, props

    beforeEach(() => {
        props =  {
            location: { pathname: 'testUrl1'},
            showUrl: (url) => {}
        }
        showUrl = sinon.stub(props, 'showUrl')
    })

    afterEach(() => {
        showUrl.reset()
    })

    it('ComponentDidMount', () => {
        wrapper = shallow(<MyComponent  {...props}/>)

        console.log(showUrl.calledOnce)
        expect(showUrl.calledOnce).toBe(true)
    })

    // it('componentWillReceiveProps', () => {
    //     wrapper = shallow(<MyComponent  {...props}/>)
    //
    //     console.log(props.location)
    //     wrapper.setProps({location: { pathname: 'testUrl2'}})
    //     console.log(wrapper.html())
    //
    //     console.log(showUrl.calledOnce)
    //
    //     expect(showUrl.calledOnce).toBe(true)
    // })
})
