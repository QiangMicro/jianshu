import * as actionType from './actionType'
// 引入axios
import axios from 'axios'
import { fromJS } from 'immutable'

// 创建action
export const seachFocus=()=>({
  type:actionType.HAD_FOCUS
})
export const seachBlur=()=>({
  type:actionType.HAD_BLUR
})

// 将不需要导出的代码统一放到顶部或是底部
const chageList=(data)=>({
  type:actionType.CHAGE_lIST,
  data:fromJS(data),
  // 取整
  totalPage:Math.ceil(data.length/10)
})

export const getList=()=>{
  return (dispatch)=>{
    axios.get('api/getList.json')
      .then((res)=>{
        const data=res.data;
        dispatch(chageList(data.data))
      })
      .catch(()=>{
        console.log('数据请求错误')
      })
  }
}