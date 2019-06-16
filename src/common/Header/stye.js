import styled from 'styled-components'
import LogoPic from '../../img/logo.png'

export const HeaderWrapp=styled.div`
  height:56px;
  border-bottom:1px solid #f0f0f0;
  position: relative;
`
export const Logo=styled.a`
  position:absolute;
  top:0;
  left:0;
  display:block;
  width:100px;
  height:60px;
  background:url(${LogoPic});
  background-size:contain;  
`
export const Nav=styled.div`
  width:960px;
  height:100%;
  padding-right:70px;
  box-sizing:border-box;
  margin:0 auto;
`

export const NavItem=styled.div`
  line-height:56px;
  padding:0 15px;
  color:#333;
  font-size: 17px;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
  &.active{
    color:#ea6f5a;
  }
`
export const SeachWrap=styled.div`
  position:relative;
  z-index:99999;
  float:left;
  .iconfont{
    position:absolute;
    right:5px;
    bottom:5px;
    width:30px;
    line-height:30px;
    border-radius:15px;
    text-align:center;
    &.focused{
      background:#6666;
    }
  }
`
//面板信息
export const SearchInFo=styled.div`
  position:absolute;
  z-index:99999;
  top:56px;
  right:0;
  padding:0 20px; 
  width:280px;
  /* 添加padding后避免原宽度增加 */
  box-sizing:content-box;
  overflow:hidden;
  border-radius:2px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchInFoTitle=styled.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:15px;
  font-size: 14px;
  color: #969696;
`
export const SearchInFoSwitch=styled.span`
  float:right;
  font-size: 13px;
  color: #969696;
  cursor:pointer;
`
export const SearchInFoItem=styled.a`
  display:block;
  float:left;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 2px 6px;
  margin-right:10px;
  margin-bottom:10px;
`


export const NavSeach=styled.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  border:none;
  outline:none;
  border-radius:15px;
  background:#eeee;
  margin-top:9px;
  padding:0 30px 0 20px;
  box-sizing:border-box;
  margin-left:20px;
  font-size:14px;
  &::placeholder{
    color:#9999;
  }
  &.focused{
    width:280px;
  }
  &.slide-enter{
    transition:all .2s ease-out;
  }
  &.slide-enter-active{
    width:280px;
  }
  &.slide-exit{
    transition:all .2s ease-out;
  }
  &.slide-exit-active{
    width:160px;
  }

`

export const Addtion=styled.div`
  position:absolute;
  top:0;
  right:0;
  height:56px;
`

export const Btn=styled.div`
  float:right;
  height:38px;
  line-height:38px;
  border-radius:12px;
  margin-top:9px;
  margin-right:20px;
  padding:0 20px;
  border:1px solid rgba(236,97,73,.7); 
  font-size: 15px;
  &.reg{
    color:#ea6f5a;
  }
  &.writing{
    color: #fff;
    background-color: #ea6f5a;
  }
`
