import styled  from 'styled-components'

export const LoginWrapp=styled.div`
  position:absolute;
  left:0;
  right:0;
  bottom:0;
  top:56px;
  background:#eee;
  
`
export const LoginBox=styled.div`
  padding:50px 0;
  width:400px;
  overflow:hidden;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  padding-top:20px;
  margin:80px auto;
  position:absolute;
  top:50%;
  left:50%;
  margin-top:-100px;
  margin-left:-200px;
  border-radius:5px;
  background-color:#ffffff;
  /* input{
    width: 60%;
    padding: 4px 12px 4px 13px;
    border: 1px solid #c8c8c8;
  } */
`
export const LoginInput=styled.input`
  display:block;
  width:200px;
  height:30px;
  padding: 4px 12px 4px 13px;
  background:#ffffff;
  border:none;
  border: 1px solid #c8c8c8;
  line-height:30px;
  margin:10px auto;
  border-radius:5px;
`
export const LoginBtn=styled.div`
  display:block;
  width:230px;
  height:30px;
  padding: 4px 12px 4px 13px;
  background:#3194d0;
  border:none;
  border: 1px solid #c8c8c8;
  line-height:30px;
  margin:20px auto;
  border-radius:20px;
  text-align:center;
  color:#ffffff;
`