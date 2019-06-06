import React, { Fragment } from 'react';
// 使用connect将组件与store建立链接
import {connect} from 'react-redux'
import {
  HeaderWrapp,Logo,Nav,NavItem,SeachWrap,NavSeach,Addtion,Btn
}from './stye.js'
// 引入拆分的action
import {actionCreators}  from './store'
// 动画
import {CSSTransition} from 'react-transition-group'

// 无状态组件可以将其写成函数
const Header=(props)=>{
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
              in={props.focused}
              // 动画时长
              timeout={200}
              className='slide'
            >
              <SeachWrap>
                <NavSeach 
                  className={props.focused ? 'focused' : ''}
                  onFocus={props.hadInputFocus}
                  onBlur={props.hadInputBlur}
                >
                </NavSeach>                            
                <i  className={props.focused ? 'iconfont focused' : 'iconfont'}>
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

// 只有render函数为无状态组件
// class Header extends Component {
//  render() {
//     return (
//       <Fragment>
//           <HeaderWrapp>
//             <Logo href='/'/>
//             <Nav>
//               <NavItem className="left active">首页</NavItem>
//               <NavItem className="left">下载APP</NavItem>
//               <NavItem className="right">
//                 <i className="iconfont">&#xe636;</i>
//               </NavItem>
//               <NavItem className="right">登录</NavItem>
//                 {/*CSSTransition动画需要传两个值分别为出入场动画和动画时长，其中自带四个
//                 类名分别为：slider-enter、slider-enter-active、slider-exit和slider-exit-active
//                 */}
//               <CSSTransition 
//               // 出入场动画
//                 in={this.props.focused}
//                 // 动画时长
//                 timeout={200}
//                 className='slide'
//               >
//                 <SeachWrap>
//                   <NavSeach 
//                     className={this.props.focused ? 'focused' : ''}
//                     onFocus={this.props.hadInputFocus}
//                     onBlur={this.props.hadInputBlur}
//                   >
//                   </NavSeach>                            
//                   <i  className={this.props.focused ? 'iconfont focused' : 'iconfont'}>
//                     &#xe60f;
//                   </i>
//                 </SeachWrap>   
//               </CSSTransition>            
//             </Nav>
//             <Addtion>
//               <Btn className="writing">
//                 <i className="iconfont">&#xe63a;</i>
//                 写文章
//               </Btn>
//               <Btn className="reg">注册</Btn>
//             </Addtion>
//           </HeaderWrapp>
//       </Fragment>
//     );
//   }
// }
const mapStateToProps =(state)=>{
  return{
    focused:state.header.get("focused")
  }
}
const mapDispathToProps =(disatch)=>{
  return{
    hadInputFocus(){
      disatch(actionCreators.seachFocus())
    },
    hadInputBlur(){
      disatch(actionCreators.seachBlur())
    }
  }
}

// 将此组件与store建立链接  映射方法
export default  connect(mapStateToProps,mapDispathToProps)( Header );