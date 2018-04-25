import React, { Component } from 'react';
import store from '../store';
import actions from '../store/actions/counter';
import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {number:props.number}
        console.log('props', props)
    }
    componentWillMount(){
        this.unsubscribe = store.subscribe((state)=>{
            //this.setState({number:this.props.number})
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }
    render(){
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
    return state.counter
}
export default connect(
    mapStateToProps, //state => state.counter
    actions
)(Counter)