简书项目总结：

一、项目介绍：

  使用React来制作简书PC端，使用styled-components、react-redux、redux、axios、immutable等第三方模块或库来完成

二、汇总

  2-1头部总结：

  header分为style.js(样式文件)、header.js(渲染页面由UI组件+容器组件->即逻辑)和store文件夹（此文件夹里存放的为分创建的action类型、action变量、reducer和index即向外暴露store里的action与reducer）


  1、为了让css样式独立存在：安装使用第三方模块“styled-components”即CSS in JS 
    npm install --save styled-components
    但是因Styled-components--V4 injectGlobal的弃用，详情见如下网址：
    https://blog.csdn.net/qq_32063079/article/details/83277054

  2、因为各浏览器的内核不同，为了实现样式的统一，使用reset.css

  3、attrs属性

  4、动画

  1）使用npm install react-transition-group --save导入react-transition-group
  2）引入：import { CSSTransitionGroup } from 'react-transition-group';

  PS：优劣势：

    CSSTransitionGroup的优势是非常明显的，简化代码提高性能
    劣势：不兼容较老的、不支持CSS3的浏览器，不支持为CSS属性之外的东西（比如滚动条位置或Canvas绘画）添加动画、可控粒度不够细，css3动画只支持start、end、ineration三个事件，不支持对中间状态进行处理、transitionEnd和animationEnd事件不稳定

  5、所有数据放到redux里，方便后续对数据的维护与管理

  6、immutable.js变成immutable（IE8以上可用）对象（不可改变的值）
    fromJS将js转成immutable对象
    其中immutable.get()获取
    immutable.set()返回全新的值
  
  7、Math.ceil取整

项目代码优化：

    1)action创建中将不需要导出的内容放到代码顶部或最后
    2)代码结构中赋值：
    如：this.props.state = const {state} = this.props
    3)reducer函数中的if判断语句使用switch...case..defult语法
    4)只发一次axios命令，


