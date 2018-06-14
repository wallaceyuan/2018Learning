/**
 * Created by yuan on 2018/6/13.
 */
import React, { Component } from 'react';
import actions from '../store/actions';
import {connect} from 'react-redux';

class Loginout extends Component{
    render(){
        handleSubmit = (event)=>{
            event.preventDefault()
            let username = this.username
            let password = this.password
            this.props.login(username,password)
        }
        return(
            <div>
                token:{this.props.token}
                error:{this.props.error}
                <button onClick={this.props.logout}>退出</button>
            </div>
        )
    }
}

export default connect(
    state=>state.user,
    actions
)(Loginout)