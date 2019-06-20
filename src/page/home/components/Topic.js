import React,{PureComponent,Fragment} from 'react'
// 使用connect将组件与store建立链接
import {connect} from 'react-redux'
import {
  TopicWrapp,TopicItem
} from '../style'
class Topic extends PureComponent {
  render(){
    const {list} =this.props
    return(
      <Fragment>
        <TopicWrapp>
          {
            list.map((item)=>(
              <TopicItem key={item.get('id')}>
                <img 
                  className='topic'
                  src={item.get('imgUrl')}
                  alt='图片路径出错'
                />
                {item.get('title')}
                
              </TopicItem>
            ))
          }
        </TopicWrapp>
      </Fragment>
    )
  }
}
const mapState=(state)=>({
  list:state.home.get('TopicList')
})
export default connect(mapState,null)(Topic);