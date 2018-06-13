/**
 * Created by yuan on 2018/6/13.
 */
import React, { Component } from 'react';
import actions from '../store/actions';
import {connect} from 'react-redux';

class Counter extends Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment}> 加1</button>
            </div>
        )
    }
}

export default connect(
    state=>state.counter,
    actions
)(Counter)