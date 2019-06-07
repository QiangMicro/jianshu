import * as actionCreators from './actionType'
// 引入axios
import axios from 'axios'

// 创建action
export const seachFocus=()=>({
  type:actionCreators.HAD_FOCUS
})
export const seachBlur=()=>({
  type:actionCreators.HAD_BLUR
})
export const chageList=(data)=>({
  type:actionCreators.CHAGE_lIST,
  data
})

export const getList=()=>{
  return (dispatch)=>{
      axios.get("/api/getList.json")
        .then(
          (res)=>{
            const data=res.data;
            dispatch(chageList.data.data)
          }
        )
        .catch(
          ()=>{
            console.log("数据请求错误")
          }
        )
    }
}