import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class HashRouter extends Component{
  static childContextTypes = {
    location:PropTypes.object,
    history:PropTypes.object
  }
  constructor(props){
    super(props)
    this.state = {location:{state:{},pathname:window.location.hash.slice(1)||'/'}};
  }
  getChildContext() {
    return {
      location:this.state.location,
      history:{
        push(path){
          window.location.hash = path
        }
      }
    }
  }
  componentDidMount(){
    window.location.hash = window.location.hash || '/'
    let render = ()=>{
      console.log('render')
      this.setState({ location: { ...this.state.location, pathname: window.location.hash.slice(1) || '/' } });
    }
    window.addEventListener('hashchange',render)
  }
  render(){
    return this.props.children
  }
}