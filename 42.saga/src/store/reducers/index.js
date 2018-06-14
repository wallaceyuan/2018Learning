/**
 * Created by yuan on 2018/6/13.
 */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import user from './user';

export default combineReducers({
    user,
    router:routerReducer
})