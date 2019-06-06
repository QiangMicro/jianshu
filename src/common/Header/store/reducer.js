// 创建reducer
import {fromJS} from 'immutable'
import * as actionCreators from './actionType'
const defaultState=fromJS({
    focused:false,
  });
  export default (state=defaultState,action)=>{
    if(action.type===actionCreators.HAD_FOCUS){
      // 不会改变原始的state数据，返回一个全新的值
      // lodash里边的cloneDeep
      // const a= _.cloneDeep(c)
      return  state.set('focused',true)
  
    };
    if(action.type===actionCreators.HAD_BLUR){
      return state.set("focused",false)
    }
    return state;
  }