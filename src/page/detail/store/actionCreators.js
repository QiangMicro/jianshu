import axios from 'axios'
import * as actionType from './actionType'

export const changeDetail=(title,content)=>({
    type:actionType.CHANGEDETAIL,
    title,
    content
})

export const getDetialData=(id)=>{
  return (dispatch)=>{
    axios.get('/api/detail.json?id=' + id )
    .then((res)=>{
      const resDate=res.data.data;
      dispatch(changeDetail(resDate.title,resDate.content))
    })
  }
  
}