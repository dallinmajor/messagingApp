import React, { Component } from 'react';

export default class Search extends Component {
    constructor (props) {
        super(props);
        this.state = { search: '' }

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        this.setState({ term: e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.props.setUser(this.state.search)
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input
                    placeholder='Search by username'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary' onClick={this.onFormSubmit}>Submit</button>
                </span>
            </form>
        )
    }
}