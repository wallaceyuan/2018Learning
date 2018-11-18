import React,{Component} from 'react';
import {render} from 'react-dom';

class Clock extends Component{
    constructor(props){
        super()
        this.state = {
            time:new Date().toLocaleString()
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000)
    }
    render(){
        return(
            <div>{this.state.time}</div>
        )
    }
}


render(<Clock />, document.getElementById('root'));
