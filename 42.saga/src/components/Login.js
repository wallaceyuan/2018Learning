/**
 * Created by yuan on 2018/6/13.
 */
import React, { Component } from 'react';
import actions from '../store/actions';
import {connect} from 'react-redux';

class Login extends Component{
    render(){
        console.log(this.props)
        return(
            <form >
                <p>{this.props.number}</p>
                <button onClick={this.props.increment}> 加1</button>
            </form>
        )
    }
}

export default connect(
    state=>state.counter,
    actions
)(Counter)