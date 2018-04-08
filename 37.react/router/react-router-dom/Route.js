import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pathToRegexp from 'path-to-regexp';

export default class Route extends Component {
    static contextTypes = {
        location:PropTypes.object
    }
    constructor(props){
        super(props)
    }
    render(){
        let { path, component: Component} = this.props
        let { location:{pathname} } = this.context
        if(pathname == path || pathname.startsWith(path)){
            return <Component location={this.context.location} />
        }
        return null
    }
}