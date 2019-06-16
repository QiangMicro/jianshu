// immutable
import {fromJS} from 'immutable'

const defaultState=fromJS({
TopicList:[{
  id:'1',
  title:'百度',
  imgUrl:'https://gss0.bdstatic.com/5bVWsj_p_tVS5dKfpU_Y_D3/qiusuo_icon/5a6639075515a8e27e0b1336db2300c1.ico'
},{
  id:'2',
  title:'网易',
  imgUrl:'https://gss0.bdstatic.com/5bVSsj_p_tVS5dKfpU_Y_D3/qiusuo_icon/0243171b97e12fd795285d6603b199bb.ico'
},{
  id:'3',
  title:'Ant Design',
  imgUrl:'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
}]
});
export default (state=defaultState,action)=>{
  return state;
}