import React, { Component } from 'react';
import store from '../store';
import actions from '../store/actions/counter';
import {connect} from 'react-redux';

class Counter extends Component {
    constructor(props){
        super(props);
    }
    componentWillMount(){
        this.unsubscribe = store.subscribe(()=>{});
    }
    componentWillUnmount(){
        this.unsubscribe();//取消订阅
    }
    promiseClick(){
        const { dispatch } = this.props
        console.log('过一秒要加11啦')

        this.props.payloadIncrement(1)
/*
        var aaa = this.props.test
        aaa.then(res=>{
            console.log(res)
        })*/
    }
    bbb(){
        new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve(1)
            },1000)
        })
    }
    render(){
        //console.log('counter render')
        return(
            <div style={{ border: '1px solid red' }}>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment.bind(this,1)}> + </button>
                <button onClick={this.props.decrement.bind(this,1)}> - </button>
                <button onClick={this.props.thunkIncrement.bind(this,1)}> 过一秒 + 1 </button>
                <button onClick={this.props.promiseIncrement.bind(this,1)}> promise过一秒 + 1 </button>
                <button onClick={this.promiseClick.bind(this)}> payload过一秒 + 1 </button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
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