// 创建reducer

const defaultState={
  focused:false,
};
export default (state=defaultState,action)=>{
  if(action.type==="had_Focus"){
    return{
      focused:true,
    }
  };
  if(action.type==="had_Blur"){
    return{
      focused:false,
    }
  }
  return state;
}