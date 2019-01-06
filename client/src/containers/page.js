import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../store/actions';
import { bindActionCreators } from 'redux';
import Display from '../components/display';
import Search from '../components/search';
import API from '../utils/API';

class Page extends Component {

    handleSetUser = (username) => {
        API.User.validate(username)
            .then(res => this.props.setUser(res.data[0]));
    }

    render() {
        return (
            <div className='container'>
                <Search setUser={this.handleSetUser}/>
                {this.props.user ? (
                    <Display display={this.props.user.username}/>
                ): null
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(Page);
