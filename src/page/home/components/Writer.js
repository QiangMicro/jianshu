import React,{Component,Fragment} from 'react'
import {
  WriterWrapp,WriterTitle
} from '../style'
class Writer extends Component{
  render(){
    return (
      <Fragment>
        <WriterWrapp>
          <WriterTitle>
            <p className='left'>推荐作者</p>
            <p className='right'>换一批</p>
          </WriterTitle>
          {/* <WriterMain></WriterMain> */}
        </WriterWrapp>
      </Fragment>
    )
  }
}
export default Writer;