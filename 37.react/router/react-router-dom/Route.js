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
        if (path == pathname || pathname.startsWith(path)){
            //console.log('path,pathname', path, pathname)
            return <Component location={this.context.location} />
        }
        return null
    }
}