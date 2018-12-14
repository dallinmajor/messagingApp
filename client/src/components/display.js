import React, { Component } from 'react';

export default class Display extends Component {
    constructor (props) {
        super(props);
        this.state = { display: '' }
    }

    componentDidMount() {
        this.setState({ display: this.props.display})
    }
    
    render() { 
        return (
            <div>
                <h1>{this.state.display}</h1>
            </div>
        )
    }
};