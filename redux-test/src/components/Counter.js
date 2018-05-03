import React, { Component } from 'react';
import actions from '../store/actions/counter';
import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props){
        super(props);
    }
    render(){
        //console.log('counter render')
        return(
            <div style={{ border: '1px solid red' }}>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment}> + </button>
                <button onClick={this.props.decrement}> - </button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    //console.log(state.counter)
    return state.counter
}

const mapDispatchToProps = (dispath) =>{
    console.log(dispath)
    return dispath
}

export default connect(
    mapStateToProps,
    actions
)(Counter)