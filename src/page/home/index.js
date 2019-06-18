import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import axios from 'axios'
// import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'

// 引用styled-components第三方模块库
import {
  HomeWrapper,HomeLeft,HomeRight
} from './style'
 

// ui组件
class Home extends Component {
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
        
      </Fragment>
    )
  }

  // 窗口组件
  componentDidMount(){
    axios.get('/api/home.json')
        .then((res)=>{
          const resDate=res.data.data;
          const action={
            type:'cheang_home',
            ListDate:resDate.ListDate,
            RecommendList:resDate.RecommendList,
            WriterList:resDate.WriterList
          }
        this.props.dipatchDate(action)
        })
  }
}
const mapDistpatch=(dispatch)=>({
  dipatchDate(action){
    dispatch(action)
  }
})
export default connect(null,mapDistpatch)( Home );
