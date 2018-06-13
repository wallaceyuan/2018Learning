/**
 * Created by yuan on 2018/6/13.
 */
import * as types from './action-types';
export default {
    increment(){
        return {type:types.INCREMENT_ASYNC};
    }
}