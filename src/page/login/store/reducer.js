// immutable
import {fromJS} from 'immutable'
import * as actionType from './actionType'


const defaultState=fromJS({
  // 默认登录为false
  login:false
});
export default (state=defaultState,action)=>{
  switch(action.type){
      default :
        return state;   
  }   
}