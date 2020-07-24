import React, { Component } from 'react'
import '../styles/home.css'
import Quantity from '../components/Quantity.jsx'
import UnitValues from '../components/UnitValues.jsx'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {activeUnit:this.props.quantities[0]}
        this.selectUnit = this.selectUnit.bind(this);
    }

    selectUnit(unit) {
        this.setState({activeUnit:unit})
    }

    render() {
        return ( 
            <main id="home">
                <div id="home-content">
                <span>Choose type</span>
                    <div id="home-content-quantities">
                        {this.props.quantities.map(quantity=><Quantity quantity={quantity} isActive={this.state.activeUnit.name===quantity.name} key={quantity.name} onlick={this.selectUnit}></Quantity>)}
                    </div>
                    <div id="home-content-values">
                        <UnitValues unitType="from" units={this.state.activeUnit.units}></UnitValues>
                        <UnitValues unitType="to" units={this.state.activeUnit.units}></UnitValues>
                    </div>
                </div>
            </main>
        );
    }
}
export default Home;