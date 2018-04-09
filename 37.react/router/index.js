import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Switch} from './react-router-dom'
import 'bootstrap';
import App from './components/App'
import User from './components/User';
import Login from './components/Login';
import Protected from './components/Protected'

let Home = (props,context)=>{
  console.log(props,context)
  return <div>首页</div>
}
//let User = ()=><div>用户管理</div>
let Profile = ()=><div>个人设置</div>

ReactDOM.render(
    <App>
        <Route path="/home" component={Home} />
        <Route path="/user" component={User} />
        <Route path="/login" component={Login} />
        <Protected path="/profile" component={Profile} />
    </App>
  ,document.querySelector('#root')
)


/**
 *
 {
  history:{
    push()
  },
  location:{pathname:'/home'},
  match{
    params:{},
    path:'/home',
    url:'/home'
  }
}
url /user/datail/1
path /user/datail/:id
params= {}
 */
