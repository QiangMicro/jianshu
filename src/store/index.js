// 创建store实例  compose方法
import {createStore,compose} from 'redux'
// 引入reducer，将reducer传给store
import reducer from './reducer'

// 使用redux-devtools-extension插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(reducer,composeEnhancers())
export default store;