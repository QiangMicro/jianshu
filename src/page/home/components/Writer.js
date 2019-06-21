import React,{PureComponent,Fragment} from 'react'
import {connect} from 'react-redux'
import {
  WriterWrapp,WriterTitle,WriterMain,MainLeft,LeftTitle,MainRight,WriterBtn
} from '../style'
class Writer extends PureComponent{
  render(){
    const {WriterLists} =this.props;
    return (
      <Fragment>
        <WriterWrapp>
          <WriterTitle>
            <p className='left'>推荐作者</p>
            <p className='right'>换一批</p>
          </WriterTitle>
          {
            WriterLists.map((item)=>(
              <WriterMain key={item.get('id')}>
                <MainLeft>
                  <img 
                    className='pic'
                    src={item.get('imgeUrl')}
                    alt='图片路径出错'
                  />
                  <LeftTitle>
                    <h3 className='title'>{item.get('name')}</h3>
                    <p className='cont'>{item.get('details')}</p>
                  </LeftTitle>
                </MainLeft>
                <MainRight>
                  +关注
                </MainRight>
              </WriterMain>
            ))
          }
          <WriterBtn>查看全部 ></WriterBtn>  
        </WriterWrapp>
      </Fragment>
    )
  }
}
const mapState=(state)=>({
  WriterLists:state.home.get('WriterList')
})
export default connect(mapState,null)(Writer) ;