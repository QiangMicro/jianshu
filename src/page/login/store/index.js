// 将reducer放置到统一文件并暴露出去，方便后续直接调入index即可，不用直接去调用reducer文件
import reducer from './reducer'
import * as actionCreators from './actionCreators'
import * as  actionType  from './actionType'
export { reducer,actionCreators,actionType };