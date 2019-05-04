import React,{PureComponent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Example from './component/hooks';

import * as serviceWorker from './serviceWorker';

class IndexComponent extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            show:true
        }
    }
    render(){
        return(
            <div>
                {this.state.show?<Example />:''}
                <button onClick={()=>this.setState({show:false})}>删除组件</button>
            </div>
        )
    }
}

ReactDOM.render(<IndexComponent />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
