import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions';
import { bindActionCreators } from 'redux';

class UserSearch extends Component {
    constructor (props) {
        super(props);
        this.state = { term: '' }

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(e) {
        this.setState({ term: e.target.value});
    }

    onFormSubmit(e) {
        e.preventDefault();
    }
    
    render() {
        return (
            <form onSubmit={this.onFormSubmit} className='input-group'>
                <input
                    placeholder='Get a five-day forecast in your favorite cities'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className='input-group-btn'>
                    <button type='submit' className='btn btn-secondary'>Submit</button>
                </span>
            </form>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setUser:setUser}, dispatch);
}

export default connect(mapDispatchToProps)(UserSearch);
