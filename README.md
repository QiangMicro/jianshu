简书项目：

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

  8、根据id来获取页面的不同路由：动态路由


问题总结：

  1、Header组件中换一换在切换页面时出action引用出错

  2、问题：SearchInFoItem出现空item
     解决方法：在循环时做判断，当i有值时再push到数组，无值时忽略

  3、z-index坑

  4、登录页面与退出页面间的切换，是通过控抽login的布尔值来确定
  

项目代码优化：

    1)action创建中将不需要导出的内容放到代码顶部或最后

    2)代码结构中赋值：
    如：this.props.state = const {state} = this.props

    3)reducer函数中的if判断语句使用switch...case..defult语法

    4)只发一次axios命令，

    5)使用connect与store绑定后会造成state数据改变后，reducer函数全部更新，耗费性能，可以使用shouldComponentUpdate生命周期函数避免虚拟Dom的比对，提升性能；但是react自带了一个纯组件PureComponent,其底层其实是一个shouldComponentUpdate（注：使用PureComponent需要与immutable来管理数据）

项目总结：

这个项目是React为技术栈仿写的简书APP，通过对此项目的开发已经熟悉了react流程，这些还远远不够，还需要从0开始构建一个完整的项目。redux这次使用的比较多但是还需要深入学习（这个项目是使用Create-react-app脚手架创建的）。前端开发基本完成，性能在开发时已同时做了优化，这些远远不够还需要进一步进行优化，接下来需要进一步对相应功能进行开发。
