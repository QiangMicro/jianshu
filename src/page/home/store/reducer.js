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
  }],
  ListDate:[{
    id:'1',
    imgUrl:'https://upload-images.jianshu.io/upload_images/13795115-3838d7027c411068.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    title:'剽悍训练营12期复盘：从一事无成到脱胎换骨我只用了22天！',
    describe:'作者：旷丹艳 剽悍训练营第12期极致一连 四排 001日复一日 忘记初心初心，能让我们保持纯净；能在我们即使身陷泥淖，仍洁白无瑕。来时是赤孑，归...'
  },{
    id:'2',
    imgUrl:'https://upload-images.jianshu.io/upload_images/1545827-00b82f46d7e651de?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    title:'把僵尸片拍成偶像剧，只有这部21年前的童年神剧做到了',
    describe:'僵尸和偶像，这是两个风马牛不相及的元素，迄今为止真正做到不违和又不让观众出戏，这么多年依旧可以为大家所津津乐道的就是那部《我和僵尸有个约会》，换...'
  },{
    id:'3',
    imgUrl:null,
    title:'戒掉5种减低新陈代谢率的食物 一个月不吃就能激瘦5KG！',
    describe:'很多女生在瘦身的时候都会有一种迷思： 要瘦就要吃得清淡，要瘦就要低卡! 其实这不完全对哦!除了低卡以外，你还得确保身体的新陈代谢率是否有提高 为...'
  },{
    id:'4',
    imgUrl:'https://upload-images.jianshu.io/upload_images/4652891-11a863274e8b0453.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    title:'什么是真正教育？',
    describe:'教育的目的是什么？ 到底什么才是真正的教育？ 获得知识？掌握技能？ 取得成功？赢得尊重？ 还是，享受乐趣…… 曾任耶鲁大学校长20年之久的理查德...'
  },{
    id:'5',
    imgUrl:'https://upload-images.jianshu.io/upload_images/5344101-960d0765d1397be3.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    title:'2019 年推荐 3 款最小 Linux 发行版',
    describe:'Linux 发行版众多，主流的 Linux 发行版例如 Ubuntu，Manjaro，Debian，Mint，Deepin 一般都很大，也很少能...'
  }],
  RecommendList:[{
    id:'1',
    imgeUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
  },{
    id:'2',
    imgeUrl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  },{
    id:'3',
    imgeUrl:'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
  },{
    id:'4',
    imgeUrl:'https//cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
  }
],
  WriterList:[{
    id:'1',
    imgeUrl:'https://upload.jianshu.io/users/upload_avatars/1835526/83d24e1a-0a0f-43f6-8a1d-289be6101e73.png?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    name:'行距版君',
    details:'写了516.8k字 · 54.2k喜欢'
  },{
    id:'2',
    imgeUrl:'https://upload.jianshu.io/users/upload_avatars/4790772/388e473c-fe2f-40e0-9301-e357ae8f1b41.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    name:'茶点故事',
    details:'写了111.5k字 · 579喜欢'
  },{
    id:'3',
    imgeUrl:'https://upload.jianshu.io/users/upload_avatars/7705786/a90dc05d-63f6-4690-8c1a-dcf7ff4422df.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp',
    name:'北落西门',
    details:'写了67.7k字 · 7.8k喜欢'
  }]
});
export default (state=defaultState,action)=>{
  return state;
}