import React,{PureComponent,Fragment} from 'react';
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {DetailWrapp,DetailTitle,Content} from './style'


class Detail extends PureComponent {
  render(){
    // 获取页面ID
    // console.log(this.props.match.params.id)
     return (
      <Fragment>
        <DetailWrapp>
          <DetailTitle>
            <h2>{this.props.title}</h2>
          </DetailTitle>
          <Content dangerouslySetInnerHTML={{__html:this.props.content}}>
           
          </Content>
        </DetailWrapp>
      </Fragment>
     ) 
  }
  
  componentDidMount(){
    this.props.getDetialAction(this.props.match.params.id)
  }
}
const mapState=(state)=>({
  title:state.detail.get('title'),
  content:state.detail.get('content')
})
// 创建action并派发action
const mapDispatch=(dispatch)=>({
  getDetialAction(id){
    dispatch(actionCreators.getDetialData(id))
  } 
})
export default connect(mapState,mapDispatch)(Detail);