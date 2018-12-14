import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions';
import { bindActionCreators } from 'redux';

class Page extends Component {
    render() {
        return (
            <div className='container'>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return bindActionCreators({ setUser: setUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
