// 创建store实例
import {createStore} from 'redux'
// 引入reducer，将reducer传给store
import reducer from './reducer'

const store =createStore(reducer)
export default store;