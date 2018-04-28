/**
 * Created by yuan on 2018/4/28.
 */
import React, { Component } from 'react';
import store from '../store';
import actions from '../store/actions/list';
import {connect} from 'react-redux';

class List extends Component {
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
        let lists = this.props.lists
        return(
            <div>
                {/* <input onBlur={this.blur} refs="listInput"/> */}
                {
                    lists.map(list=>{
                        return <div idx={list.idx} key={list.idx}>{list.text}</div>
                    })
                }
            </div>
        )
    }
}

export default connect(
    state=>state.list,
    actions
)(List)