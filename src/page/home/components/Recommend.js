import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {
  RecommendWrap,RecommendItem,Downlod,DownlodRight
} from '../style'
class Recommend extends Component {
  render(){
    const {itemList} =this.props;
    return (
      <Fragment>
        {
          itemList.map((item)=>{
            return (
              <RecommendWrap  key={item.get('id')}  >
                <RecommendItem  imgeUrl={item.get('imgeUrl')} />
              </RecommendWrap>
            )
          })
        }
        <Downlod>
          <img />
          <DownlodRight>
            <img 
              className='pic'
              src='//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png'
              alt='图片路径出错'
            />
            <DownlodRight onMouseEnter={()=>{
              return (
                console.log(1)
              )
            }}>
              <h4 className='title'>下载简书手机App</h4>
              <p className='conent'>随时随地发现和创作内容</p>
            </DownlodRight>
          </DownlodRight>
        </Downlod>
      </Fragment>
    )
  }
}
const mapState= (state)=>({
  itemList:state.home.get('RecommendList')
})

export default connect(mapState,null)( Recommend);