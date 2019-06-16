import React, { Component} from 'react';
// react-redux有一个核心组件是provider
import {Provider} from 'react-redux'
// 引用路由   BrowserRouter代表路由  route代表路由规则
import { BrowserRouter,Route } from 'react-router-dom'
import Header from './common/Header/Header'
import {GlobalStyle} from './styles.js'
import {GlobalStyles} from './img/iconfont/iconfont'
import store from './store'
// 引入路由页面
import Home from './page/home'
import Detail from './page/detail'

class App extends Component {
  render() {
    return (
      // provider里的组件都可以store里的数据
      <Provider store={store}>
        <GlobalStyle/>
          <GlobalStyles />
          < Header />
          {/* 引用路由，根据url的不同显示不同的内容 ，exact精确的显示内容*/}
          <BrowserRouter>
            <div>
              <Route path='/' exact  component={Home}></Route>
              <Route path='/detail' exact component={Detail}></Route> 
            </div>
          </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
