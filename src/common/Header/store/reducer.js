// 创建reducer
import * as actionType from './actionType'
// immutable
import {fromJS} from 'immutable'

// import { stat } from 'fs';
const defaultState=fromJS({
  // 输入框默认显示
    focused:false,
    //面板默认不显示
    mouseIn:false,
    lis:[],
    // 当前有多少页
    page:1,
    // 一共有多少页
    totalPage:1
  });
  export default (state=defaultState,action)=>{
    console.log(action.type, actionType.CHANGE_PAGE)
    switch(action.type){
      case actionType.HAD_FOCUS :
        return  state.set('focused',true);
      case actionType.HAD_BLUR :
        // 当输入框失去焦点时fouced为false,mouseIn为
        return state.set("focused",false).set("mouseIn",true);
      case actionType.CHAGE_lIST :
        return state.set('lis',action.data).set('totalPage',action.totalPage);
      case actionType.MOUSEENTER :
        return  state.set("mouseIn",true);
      case actionType.MOUSELAVE :
        return state.set("mouseIn",false);
      case actionType.CHANGE_PAGE :
        return state.set("page",action.page);
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