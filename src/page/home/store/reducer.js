// immutable
import {fromJS} from 'immutable'
import * as actionType from './actionType'


const defaultState=fromJS({
  // TopicList:[],
  ListDate:[],
  RecommendList:[],
  WriterList:[]
});
export default (state=defaultState,action)=>{
  switch(action.type){
    case actionType.CHANGE_HOME :
      return state.merge({
        ListDate:fromJS(action.ListDate),
        RecommendList:fromJS(action.RecommendList),
        WriterList:fromJS(action.WriterList)
      })
      case actionType.GET_MORE_LIST :
        return state.set('ListDate',state.get('ListDate').concat(action.moreDate))

      default :
        return state;   
  }   
}