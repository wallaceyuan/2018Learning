import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import './index.css';
import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import {createStore} from 'redux'
import Bundle from './components/Bundle';
/*import App from './App';
 import * as serviceWorker from './serviceWorker';*/
//ReactDOM.render(<label className="test" htmlFor='hello'>hello<span>world</span></label>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.unregister();

/*let React = {
 createElement(type, props, ...children){
 return {type, props, children}
 }
 }
 let el = <h1 name="yy">hello<span>world</span></h1>

 render(el, document.getElementById('root'))

 function render(vnode, container) {
 if (typeof vnode === 'string') return container.appendChild(document.createTextNode(vnode))
 let {type, props, children} = vnode
 let tag = document.createElement(type)
 for (let key in props) {
 tag.setAttribute(key, props[key])
 }
 children.forEach(child=> {
 render(child, tag)
 })
 container.append(tag)
 }*/
//React.createElement(<h1 name="yy">hello<span>world</span></h1>, document.getElementById('root'));
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const aa = React.createElement(
    'span',
    null,
    'world'
)

function counterReducer(state = 0,action) {
    switch(action.type){
        case INCREMENT:
            console.log(state)
            return state+1;
        case DECREMENT:
            return state-1;
        default:
            return state
    }
}
const store = createStore(counterReducer)

let LazyAbout=(props) => (<Bundle {...props} load={ ()=> require('./About')} />)

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
        this.incrementAsync = this.incrementAsync.bind(this);
        this.incrementIfOdd = this.incrementIfOdd.bind(this);
    }
    incrementAsync(){
        if(this.props.value % 2 !== 0){
            this.props.onIncrement()
        }
    }
    incrementIfOdd() {
        setTimeout(this.props.onIncrement, 1000)
    }
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>this.setState({count:store.getState()}))
    }
    componentWillUnmount() {
        this.unsubscribe();
    }
    handleClick = ()=> {
        /*this.setState({count:this.state.count +1 },function () {
         this.setState({count:this.state.count + 1})
         })*/
        /*this.setState(function (preState,props) {
         return {count:preState.count+1}
         })*/
        this.setState((preState, props)=>({count: preState.count + 1}))
    }

    render() {
        console.log('render')
        const { value, onIncrement, onDecrement } = this.props
        return (
            <p>
                Clicked: {value} times
                {this.state.count}
                {' '}
                <button onClick={onIncrement}>
                    +
                </button>
                {' '}
                <button onClick={onDecrement}>
                    -
                </button>
            </p>
        )
    }
}

ReactDOM.render(
    /*<Counter
        value={store.getState()}
        onIncrement = {()=>store.dispatch({type:'INCREMENT'})}
        onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />*/
    <Router>
        <div>
            <Route path="/" component={Home}/>
            <Route path="/user" component={LazyAbout}/>
            {/*<Route path="/profile" component={Profile}/>*/}
        </div>
    </Router>,
    /*React.createElement(
     'label',
     {htmlFor:'hello',className:'test'},
     'hello',
     aa
     ),*/
    document.getElementById('root')
);