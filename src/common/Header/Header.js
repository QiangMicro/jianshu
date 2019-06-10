// 2019.6.7因Header组件会继续壮大，现在将原无状态组件更改为普通组件
// 无状态组件+容器组件  2019.6.6


import React, { Fragment,Component } from 'react';
// 使用connect将组件与store建立链接
import {connect} from 'react-redux'
import {
  HeaderWrapp,Logo,Nav,NavItem,
  SeachWrap,NavSeach,SearchInFo,SearchInFoTitle,SearchInFoSwitch,SearchInFoItem,
  Addtion,Btn
}from './stye.js'
// 引入拆分的action
import {actionCreators}  from './store'
// 动画
import {CSSTransition} from 'react-transition-group'
// import { objectExpression } from '@babel/types';

class Header extends Component {
  getList(){
    // 使用结构赋值将代码简化
    const {focused} =this.props
    if(focused){
      return (
        <SearchInFo>
          <SearchInFoTitle>
            热门搜索
            <SearchInFoSwitch>换一批</SearchInFoSwitch>
          </SearchInFoTitle>
          <div>
            {
              this.props.lis.map(item=>{
                return  <SearchInFoItem key={item}>{item}</SearchInFoItem>
              })
            }
            {/* <SearchInFoItem>区块链接</SearchInFoItem>
            <SearchInFoItem>小程序</SearchInFoItem>
            <SearchInFoItem>Vue</SearchInFoItem>
            <SearchInFoItem>毕业</SearchInFoItem>
            <SearchInFoItem>PHP</SearchInFoItem>
            <SearchInFoItem>微信小程序+React</SearchInFoItem> */}
          </div>
        </SearchInFo>
      )
    }else{
      return null
    }
  }
  render(){
    const {focused,hadInputFocus,hadInputBlur} =this.props;
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
                in={focused}
                // 动画时长
                timeout={200}
                className='slide'
              >
                <SeachWrap>
                  <NavSeach 
                    className={focused ? 'focused' : ''}
                    onFocus={hadInputFocus}
                    onBlur={hadInputBlur}
                  >
                  </NavSeach>                            
                  <i  className={focused ? 'iconfont focused' : 'iconfont'}>
                    &#xe60f;
                  </i>
                  {this.getList(focused)}
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
// 通过函数将热门搜索显示与否
// const getList=(show)=>{
//   if(show){
//     return (
//       <SearchInFo>
//         <SearchInFoTitle>
//           热门搜索
//           <SearchInFoSwitch>换一批</SearchInFoSwitch>
//         </SearchInFoTitle>
//         <div>
//           <SearchInFoItem>区块链接</SearchInFoItem>
//           <SearchInFoItem>小程序</SearchInFoItem>
//           <SearchInFoItem>Vue</SearchInFoItem>
//           <SearchInFoItem>毕业</SearchInFoItem>
//           <SearchInFoItem>PHP</SearchInFoItem>
//           <SearchInFoItem>微信小程序+React</SearchInFoItem>
//         </div>
//       </SearchInFo>
//     )
//   }else{
//     return null
//   }
// }
// 无状态组件可以将其写成函数
// const Header=(props)=>{
//   return (
//     <Fragment>
//         <HeaderWrapp>
//           <Logo href='/'/>
//           <Nav>
//             <NavItem className="left active">首页</NavItem>
//             <NavItem className="left">下载APP</NavItem>
//             <NavItem className="right">
//               <i className="iconfont">&#xe636;</i>
//             </NavItem>
//             <NavItem className="right">登录</NavItem>
//               {/*CSSTransition动画需要传两个值分别为出入场动画和动画时长，其中自带四个
//               类名分别为：slider-enter、slider-enter-active、slider-exit和slider-exit-active
//               */}
//             <CSSTransition 
//             // 出入场动画
//               in={props.focused}
//               // 动画时长
//               timeout={200}
//               className='slide'
//             >
//               <SeachWrap>
//                 <NavSeach 
//                   className={props.focused ? 'focused' : ''}
//                   onFocus={props.hadInputFocus}
//                   onBlur={props.hadInputBlur}
//                 >
//                 </NavSeach>                            
//                 <i  className={props.focused ? 'iconfont focused' : 'iconfont'}>
//                   &#xe60f;
//                 </i>
//                 {getList(props.focused)}
//               </SeachWrap>   
//             </CSSTransition>            
//           </Nav>
//           <Addtion>
//             <Btn className="writing">
//               <i className="iconfont">&#xe63a;</i>
//               写文章
//             </Btn>
//             <Btn className="reg">注册</Btn>
//           </Addtion>
//         </HeaderWrapp>
//     </Fragment>
//   );
// }

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
//                 in={focused}
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
    focused:state.header.get("focused"),
    lis:state.header.get("lis")
  }
}
const mapDispathToProps =(dispatch)=>{
  return{
    hadInputFocus(){
      //异步请求
      dispatch(actionCreators.getList());
      // 控制搜索框的长短
      dispatch(actionCreators.seachFocus())
    },
    hadInputBlur(){
      dispatch(actionCreators.seachBlur())
    }
  }
}

// 将此组件与store建立链接  映射方法
export default  connect(mapStateToProps,mapDispathToProps)( Header );