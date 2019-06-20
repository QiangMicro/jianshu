// immutable
import {fromJS} from 'immutable'


const defaultState=fromJS({
  title:'Zara春季新款开挂啦！这样搭配美出新高度！',
  content:'<p>嗨喽，小仙女们，晚上好呀～今天是被风吹傻的小编。</p><p>前不久ZARA出了口红，小姐妹们都知道么？99一支，199三支，也算是性价超高了。</p><p>但对于一个时尚店，我还是更喜欢<b>zara</b>家的衣服，如果说HM是邻家小妹妹，那ZARA就是气质大姐姐。</p><p>当然无需比较谁更好，都是心头肉呀！</p><p>今天，跟大家分享小红书上边超级好看的小姐姐<b>【蛋挞子】</b>关于<b>zara</b>非常火爆的<b>五套搭配～</b></p><img alt="图片路径出错" className="pic"  src="//upload-images.jianshu.io/upload_images/4758074-64c69253db261046.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/750/format/webp"/>'
});
export default (state=defaultState,action)=>{
  switch (action.type){
    default :
      return state
  }
}


