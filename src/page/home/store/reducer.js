// immutable
import {fromJS} from 'immutable'

const defaultState=fromJS({
  // TopicList:[],
  ListDate:[],
  RecommendList:[],
  WriterList:[]
});
export default (state=defaultState,action)=>{
  switch(action.type){
    case 'cheang_home' :
      return state.merge({
        ListDate:fromJS(action.ListDate),
        RecommendList:fromJS(action.RecommendList),
        WriterList:fromJS(action.WriterList)
      })
      
  }
    
  return state;
}