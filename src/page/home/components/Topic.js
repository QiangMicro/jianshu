import React,{Component,Fragment} from 'react'
// 使用connect将组件与store建立链接
import {connect} from 'react-redux'
import {
  TopicWrapp,TopicItem
} from '../style'
class Topic extends Component {
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
  list:state.Topic.get('TopicList')
})
export default connect(mapState,null)(Topic);