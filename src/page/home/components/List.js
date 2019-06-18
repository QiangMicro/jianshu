import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import { ListWrapper,ListInfo,ListWrappers,ListInfos,LoadMore } from '../style'

class List extends Component{
  render(){
    const { list} =this.props;
    return(
      <Fragment>
        {
          list.map((item) =>{
            if(item.get('imgUrl')){
              return (
                <ListWrapper key={item.get('id')}>
                  <img className="ListPic" 
                      alt='图片路径出错' 
                      src={item.get('imgUrl')}
                  />
                  <ListInfo>
                    <h2 className='title'>{item.get('title')}</h2>
                    <p className='conent'>{item.get('describe')}</p>
                  </ListInfo>
                </ListWrapper>
              )
            }else{
              return (
                <ListWrappers key={item.get('id')}>
                  <ListInfos>
                    <h2 className='title'>{item.get('title')}</h2>
                    <p className='conent'>{item.get('describe')}</p>
                  </ListInfos>
                </ListWrappers>
              )
            }
           
          })
        }
        <LoadMore >阅读更多</LoadMore>
      </Fragment> 
    )
  }
}
const mapState =(state) =>({
  list:state.home.get('ListDate')
})
export default connect(mapState,null)(List) ;