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
  width:280px;
`

export const TopicWrapp=styled.div`
  overflow:hidden;
  padding:15px 0 15px 0;
  margin-left:-10px;
  border-bottom:1px solid #dcdcdc;
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

export const ListWrapper=styled.div`
  overflow:hidden;
  padding:20px 0;
  border-bottom:1px solid #dcdcdc;
  .ListPic{
    width:125px;
    height:100px;
    display:block;
    float:right;
  }
`
export const ListInfo=styled.div`
  width:500px;
  float:left;
  .title{
    color:#333333;
    font-size:18px;
    font-weight:bold;
    line-height:40px; 
  }
  .conent{
    color:#999999;
    line-height:25px;
    font-size:13px;
  }
`

export const ListWrappers=styled.div`
  overflow:hidden;
  padding:20px 0;
  width:100%;
  border-bottom:1px solid #dcdcdc;
`
export const ListInfos=styled.div`
  .title{
    color:#333333;
    font-size:18px;
    font-weight:bold;
    line-height:40px; 
  }
  .conent{
    color:#999999;
    line-height:25px;
    font-size:13px;
  }
`

export const RecommendWrap =styled.div`
  margin:30px 0;
  width:300px;
  overflow:hidden;
`
export const RecommendItem=styled.div`
  height:50px;
  background:url(${(props)=>props.imgeUrl}) ;
  background-size:contain; 
`
export const Downlod=styled.div`
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 234px;
  overflow:hidden;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color:#fff;
  margin-right:-10px;
  .pic{
    float:left;
    width:60px;
    height: 60px;
    margin-right:10px;
  }
`
export const DownlodRight=styled.div`
  .title{
    font-size:15px;
    color:#333333;
    line-height:20px;
  }
  .conent{
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`

export const WriterWrapp=styled.div`
  width:260px;
  padding:10px;
`
export const WriterTitle=styled.div`
  .left{
    display:block;
    float:left;
    font-size: 14px;
    color: #969696;
}
  }
  .right{
    display:block;
    float:right;
    font-size: 14px;
    color: #969696;
  }
`
