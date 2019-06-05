import React, { Component} from 'react';
// react-redux有一个核心组件是provider
import {Provider} from 'react-redux'
import Header from './common/Header/Header'
import {GlobalStyle} from './styles.js'
import {GlobalStyles} from './img/iconfont/iconfont'
import store from './store'

class App extends Component {
  render() {
    return (
      // provider里的组件都可以store里的数据
      <Provider store={store}>
        <GlobalStyle/>
          <GlobalStyles />
          < Header />
      </Provider>
    );
  }
}

export default App;
