
import axios from 'axios'
import * as actionType from './actionType'
import { fromJS } from 'immutable'

export const getInfo =()=>{
  return(dispatch)=>{
    axios.get('/api/home.json')
      .then((res)=>{
        const resDate=res.data.data;
        const action={
          type:actionType.CHANGE_HOME,
          ListDate:resDate.ListDate,
          RecommendList:resDate.RecommendList,
          WriterList:resDate.WriterList
        }
      dispatch(action)
    })
  }
}

// 创建action
export const getMoreList=()=>{
  return(dispatch) => {
    axios.get('/api/homeList.json')
      .then((res)=>{
        const moreDate=fromJS(res.data.data);
        const action ={
          type:actionType.GET_MORE_LIST,   
          moreDate:fromJS(moreDate)
        }
        dispatch(action)
      })
  }
}

// 创建回到顶部action
export const changeScoll=(show)=>{
  return(dispatch)=>{
    const action ={
      type:actionType.CHANGE_SHOW,
      show
    }
    dispatch(action)
  }
 
}