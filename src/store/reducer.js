// 使用combineReducers对reducer进行数据整合.好处：在使用combineReducer整合时目录会减少

import {combineReducers} from 'redux'
import {reducer as headerReducer} from '../common/Header/store/index'
import {reducer as homeReducer } from '../page/home/store'
import {reducer as detailReducer} from '../page/detail/store'


const reducer=combineReducers({
  header:headerReducer,
  home:homeReducer,
  detail:detailReducer
})

export default reducer;
// TopicReducer