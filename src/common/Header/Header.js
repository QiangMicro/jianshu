import React, { Component,Fragment } from 'react';
import {
  HeaderWrapp,Logo,Nav,NavItem,SeachWrap,NavSeach,Addtion,Btn
}from './stye.js'
// 动画
import {CSSTransition} from 'react-transition-group'

class Header extends Component {
  constructor(props){
    super(props)
    this.state={
      fouced:false,
    }
    this.hadInputFocus=this.hadInputFocus.bind(this);
    this.hadInputBlur=this.hadInputBlur.bind(this);
  }

  // 控制输入框的变化
  hadInputFocus(){
    this.setState({
      fouced:true,
    })
  }
  hadInputBlur(){
    this.setState({
      fouced:false,
    })
  }

  render() {
    return (
      <Fragment>
          <HeaderWrapp>
            <Logo href='/'/>
            <Nav>
              <NavItem className="left active">首页</NavItem>
              <NavItem className="left">下载APP</NavItem>
              <NavItem className="right">
                <i className="iconfont">&#xe636;</i>
              </NavItem>
              <NavItem className="right">登录</NavItem>
                {/*CSSTransition动画需要传两个值分别为出入场动画和动画时长，其中自带四个
                类名分别为：slider-enter、slider-enter-active、slider-exit和slider-exit-active
                */}
              <CSSTransition 
              // 出入场动画
                in={this.state.fouced}
                // 动画时长
                timeout={200}
                className='slide'
              >
                <SeachWrap>
                  <NavSeach 
                    className={this.state.fouced ? 'fouced' : ''}
                    onFocus={this.hadInputFocus}
                    onBlur={this.hadInputBlur}
                  >
                  </NavSeach>                            
                  <i  className={this.state.fouced ? 'iconfont fouced' : 'iconfont'}>
                    &#xe60f;
                  </i>
                </SeachWrap>   
              </CSSTransition>            
            </Nav>
            <Addtion>
              <Btn className="writing">
                <i className="iconfont">&#xe63a;</i>
                写文章
              </Btn>
              <Btn className="reg">注册</Btn>
            </Addtion>
          </HeaderWrapp>
      </Fragment>
    );
  }
}

export default Header;