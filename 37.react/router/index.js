import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route} from 'react-router-dom'

let Home = (props,context)=>{
  console.log(props,context)
  return <div>首页</div>
}
let User = ()=><div>用户管理</div>
let Profile = ()=><div>个人设置</div>

ReactDOM.render(
  <Router>
    <div>
      <Route path="/home" component={Home}></Route>
      <Route path="/user" component={User}></Route>
      <Route path="/profile" component={Profile}></Route>
    </div>
  </Router>
  ,document.querySelector('#root')
)
