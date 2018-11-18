import React,{Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types'; // ES6

class Person extends Component{
    static defaultProps = {
        name:'zfpx'
    }
    static propTypes = {
        name:PropTypes.string.isRequired
    }
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            age:props.age
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                time:new Date().toLocaleString()
            })
        },1000)
    }
    handleClick=()=>{
        this.setState((prevState)=>({age:prevState.age+1}))
        this.setState((prevState)=>({age:prevState.age+1}))
    }
    render(){
        const {age} = this.state
        return(
            <div onClick={this.handleClick}>{age}</div>
        )
    }
}

//属性校验
let obj = {
    name:'zfpx',
    age:9,
    hobby:['游泳','跑步'],
    pos:{x:433,y:822},
    salary:3000
}

render(<Person {...obj}/>, document.getElementById('root'));
