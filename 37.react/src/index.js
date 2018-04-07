import React from 'react';
import ReactDOM from 'react-dom';
import DOMDiff from './components/DOMDiff';
import HighOrder from './components/highOrder';

ReactDOM.render(<HighOrder />, document.querySelector('#root'));


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