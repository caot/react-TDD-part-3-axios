import React, {Component} from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import Map from '../components/Map'
import mapChooser from '../mapChooser'
import axios from 'axios';

class StoreLocator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMap: "none.png",
            shops: []
        };

        this.chooseMap = this.chooseMap.bind(this);
    }

    async componentDidMount() {
        let response = await axios.get("http://localhost:3000/data/shops.json");

        console.log(response);
        console.log(response.data.shops);
        this.setState({
            shops: response.data.shops
        })
    }

    chooseMap(e) {
        // console.log(e.target.value)
        this.setState({currentMap: mapChooser(e.target.value)});
    }

    render() {
        if (!this.state.shops)

        console.log(this.state.shops);
        let storeButtons = this.state.shops.map((shop, id) => {
            return (<Button handleClick={this.chooseMap} key={id} location={shop.location} />)
        });

        return (
            <div>
                <Header />
                <div className={'render-storeButtons'}>{storeButtons}</div>
                <Map imagename={this.state.currentMap} location={this.props.location}/>
            </div>
        )
    }
}

export default StoreLocator;
