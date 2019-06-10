// 创建reducer
import * as actionType from './actionType'
// immutable
import {fromJS} from 'immutable'

// import { stat } from 'fs';
const defaultState=fromJS({
    focused:false,
    lis:[]
  });
  export default (state=defaultState,action)=>{
    switch(action.type){
      case actionType.HAD_FOCUS :
        return  state.set('focused',true);
      case actionType.HAD_BLUR :
        return state.set("focused",false);
      case actionType.CHAGE_lIST :
        return state.set('lis',action.data);
      default :
        return state;

    }

    // if(action.type===actionType.HAD_FOCUS){
    //   // 不会改变原始的state数据，返回一个全新的值
    //   // lodash里边的cloneDeep
    //   // const a= _.cloneDeep(c)
    //   return  state.set('focused',true)
  
    // };
    // if(action.type===actionType.HAD_BLUR){
    //   return state.set("focused",false)
    // }
    // if(action.type===actionType.CHAGE_lIST){
    //   return state.set('lis',action.data)
    // }
    // return state;
  }