import React,{Component} from 'react';
import PropTypes from 'prop-types';


export default class HashRouter extends Component{
  static childContextTypes = {
    location:PropTypes.object,
    history:PropTypes.object
  }
  getChildContext(){
    return {
      location:{pathname:window.location.hash.slice(1)}
      
    }
  }
  constructor(props){
    super(props)
    this.state = {}
  }
}