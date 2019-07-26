import React, {Component} from 'react';

class MyComponent extends Component {
    componentDidMount() {
        this.props.showUrl(this.props.location.pathname)
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.props.showUrl(this.props.location.pathname)
        }
    }

    render() {
        return (<div>Hello My Component</div>)
    }

}

export default MyComponent
