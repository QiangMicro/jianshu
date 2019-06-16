import styled  from 'styled-components';
export  const HomeWrapper=styled.div`
  width:960px;
  margin:0 auto;
  overflow:hidden;
`
export  const HomeLeft=styled.div`
  float:left;
  position:absolute;
  margin-left:15px;
  padding-top:30px;
  width:630px;
  .banner_img{
    width:625px;
    height:270px;
  }
`
export  const HomeRight=styled.div`
  float:right;
  width:240px;
`

export const TopicWrapp=styled.div`
  overflow:hidden;
  padding:15px 0 15px 0;
  margin-left:-10px;
`
export const TopicItem=styled.div`
  float:left;
  height:32px;
  line-height:32px;
  margin-left:10px;
  margin-bottom:10px;
  padding-right:10px;
  font-size:14px;
  border:1px solid #dcdcdc;
  border-radius:4px;
  padding:2px;
  .topic{
    width:32px;
    height:32px;
    display:block;
    float:left;
    margin-right:10px;
  }
`