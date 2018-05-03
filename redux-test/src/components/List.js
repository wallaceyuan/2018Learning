/**
 * Created by yuan on 2018/4/28.
 */
import React, { Component } from 'react';
import actions from '../store/actions/list';
import {connect} from 'react-redux';

class List extends Component {
    constructor(props){
        super(props);
        //console.log(props)
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
                            <li idx={index} key={index}>{list.text}</li>
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