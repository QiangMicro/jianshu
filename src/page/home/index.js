import React, { PureComponent,Fragment } from 'react';
import {connect} from 'react-redux'
// import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import { actionCreators} from './store'

// 引用styled-components第三方模块库
import {
  HomeWrapper,HomeLeft,HomeRight,BackTop
} from './style'
 

// ui组件
class Home extends PureComponent {
  render(){
    return (
      <Fragment>
        <HomeWrapper>
          <HomeLeft>
            <img 
              className='banner_img' 
              src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" 
              alt="图片路径有问题" 
              title="简书" 
            />
            {/* <Topic /> */}
            <List />
          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
        </HomeWrapper>
        {/* 回到顶部,回到顶部是否显示其实是控制reducer里的showScoll的值是true或是fasle */}
        {
          this.props.showScoll ?<BackTop onClick={()=>this.props.hadToTop()}>顶部</BackTop> :null
        }
        
      </Fragment>
    )
  }

  // Ui组件
  componentDidMount(){
   this.props.dipatchDate()
  //  绑定一个事件监听window的scoll事件
  this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeshowScoll)
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeshowScoll)
  }
}

const mapState=(state)=>({
  
  showScoll:state.home.get('showScoll')
})

// 容器组件用于逻辑判断
const mapDistpatch=(dispatch)=>({
  dipatchDate(){
    // 异步操作使用thunk后放到action里管理
    const action = actionCreators.getInfo();
    dispatch(action)
  },
  changeshowScoll(){
    // 大于100时显示“顶部” 小于100时则不显示
    if(document.documentElement.scrollTop>100){
      // 改reducer值，通过创建action
      const action =actionCreators.changeScoll(true);
      dispatch(action)
    }else{
      const action =actionCreators.changeScoll(false);
      dispatch(action)
    }
  },
  hadToTop(){
    window.scrollTo(0,0)
  }
})
export default connect(mapState,mapDistpatch)( Home );
