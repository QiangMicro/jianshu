import React,{PureComponent,Fragment} from 'react'
import {
  LoginWrapp,LoginBox,LoginInput,LoginBtn
} from './style'
class Login extends PureComponent {
  render(){
    return(
      <Fragment>
        <LoginWrapp>
          <LoginBox>
            <LoginInput  placeholder='用户名 ' />
            <LoginInput  placeholder='密码 ' type='password' />
            <LoginBtn>提交</LoginBtn>
          </LoginBox>
        </LoginWrapp>
      </Fragment>
    )
    
  }
}
export default Login;
