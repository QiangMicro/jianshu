import React,{PureComponent,Fragment} from 'react';
import {connect} from 'react-redux'
import {DetailWrapp,DetailTitle,Content} from './style'


class Detail extends PureComponent {
  render(){
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
}
const mapState=(state)=>({
  title:state.detail.get('title'),
  content:state.detail.get('content')
})
export default connect(mapState,null)(Detail);