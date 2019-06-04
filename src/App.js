import React, { Component,Fragment } from 'react';
import Header from './common/Header/Header'
import {GlobalStyle} from './styles.js'
import {GlobalStyles} from './img/iconfont/iconfont'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle/>
          <GlobalStyles />
          < Header />
      </Fragment>
    );
  }
}

export default App;
