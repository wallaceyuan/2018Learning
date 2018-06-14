/**
 * Created by yuan on 2018/6/13.
 */
import * as types from './action-types';
export default {
    login(username,password){
        return {type:types.LOGIN_REQUEST,username,password};
    },
    logout(){
        return {type:types.LOGOUT_REQUEST};
    }
}