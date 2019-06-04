import React, { Component,Fragment } from 'react';
import {
  HeaderWrapp,Logo,Nav,NavItem,SeachWrap,NavSeach,Addtion,Btn
}from './stye.js'

class Header extends Component {
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
              <SeachWrap>
                <NavSeach></NavSeach>
                <i className="iconfont">&#xe60f;</i>
              </SeachWrap>
             
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