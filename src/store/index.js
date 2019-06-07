// 创建store实例  compose方法  applyMiddleware()是redux-thunk提供的方法
import {createStore,compose,applyMiddleware} from 'redux'
// 引入shunk中间件：是action与store之间，是对dispatch的升级
import thunk from 'redux-thunk'
// 引入reducer，将reducer传给store
import reducer from './reducer'

// 使用redux-devtools-extension插件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store =createStore(reducer,composeEnhancers(
    // 调用applyMiddleware()方法中的thunk
    applyMiddleware(thunk)
))
export default store;