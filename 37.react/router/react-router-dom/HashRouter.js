import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class HashRouter extends Component{
  static childContextTypes = {
    location:PropTypes.object,
    history:PropTypes.object
  }
  constructor(props){
    super(props)
    this.state = { location: { pathname: window.location.hash.slice(1) || '/' }, state: {}  };
  }
  getChildContext() {
    let that = this
    return {
      location: this.state.location,
      history: {
        push(path) {
          if (typeof path == 'object') {
            let { pathname, state } = path;
            that.setState({
              location: { ...that.state.location, state }
            }, () => {
              console.log('this.state.location.state', that.state.location.state);
              window.location.hash = pathname;
            });
          } else {
            window.location.hash = path;
          }
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