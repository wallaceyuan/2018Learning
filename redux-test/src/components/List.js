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
    }
    componentWillMount(){
        this.unsubscribe = store.subscribe(()=>{});
    }
    componentWillUnmount(){
        this.unsubscribe();//取消订阅
    }
    handleAdd = ()=>{
        this.props.add_todo(this.todo.value)
        this.todo.value = ''
    }
    render(){
        //console.log('list render')
        return(
            <div>
                <input ref={input => this.todo = input}/><button onClick={this.handleAdd}>+</button>
                <ul>
                    {
                        this.props.lists.map((list,index)=>(
                            <li key={index} style={{textDecoration:list.completed?'line-through':''}}>
                                <span onDoubleClick={console.log(121)}>{list.text}</span>
                                <button onClick={console.log(111)}></button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default connect(
    state=>state.list,
    actions
)(List)