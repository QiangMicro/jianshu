import React,{PureComponent,Fragment} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { ListWrapper,ListInfo,ListWrappers,ListInfos,LoadMore } from '../style'
import {actionCreators} from '../store'

class List extends PureComponent{
  render(){
    const { list,ReadMore } =this.props;
    return(
      <Fragment>
        {
          list.map((item,index) =>{
            if(item.get('imgUrl')){
              return (
                <Link key={index} to='/detail' >
                  <ListWrapper  >
                    <img className="ListPic" 
                        alt='图片路径出错' 
                        src={item.get('imgUrl')}
                    />
                    <ListInfo>
                      <h2 className='title'>{item.get('title')}</h2>
                      <p className='conent'>{item.get('describe')}</p>
                    </ListInfo>
                  </ListWrapper>
                </Link>
              )
            }else{
              return (
                <ListWrappers key={index}>
                  <ListInfos>
                    <h2 className='title'>{item.get('title')}</h2>
                    <p className='conent'>{item.get('describe')}</p>
                  </ListInfos>
                </ListWrappers>
              )
            }
           
          })
        }
        {/* 点击事件 */}
        <LoadMore onClick={ReadMore} >阅读更多</LoadMore>
      </Fragment> 
    )
  }
}
const mapState =(state) =>({
  list:state.home.get('ListDate')
})
// 异步请求，派发action
const mapDistpatch= (dispatch) =>({
  ReadMore(){
    dispatch(actionCreators.getMoreList())
  }
})
export default connect(mapState,mapDistpatch)(List) ;