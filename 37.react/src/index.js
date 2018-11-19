import React from 'react';
import ReactDOM from 'react-dom';
import DOMDiff from './components/DOMDiff';
import HighOrder from './components/highOrder';
import Todos from './components/Todos';

ReactDOM.render(<DOMDiff />, document.querySelector('#root'));


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