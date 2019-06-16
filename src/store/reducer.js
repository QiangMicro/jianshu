// 使用combineReducers对reducer进行数据整合.好处：在使用combineReducer整合时目录会减少

import {combineReducers} from 'redux'
import {reducer as headerReducer} from '../common/Header/store/index'
import {reducer as TopicReducer } from '../page/home/store'

const reducer=combineReducers({
  header:headerReducer,
  Topic:TopicReducer
})

export default reducer;