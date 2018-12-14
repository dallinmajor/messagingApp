import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions';
import { bindActionCreators } from 'redux';
import Display from '../components/display';
import Search from '../components/search';

class Page extends Component {
    render() {
        return (
            <div className='container'>
                <Search setUser={this.props.setUser}/>
                <Display display={this.props.user.username}/>
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
