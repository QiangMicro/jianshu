简书项目总结：

一、项目介绍：

  使用React来制作简书PC端

二、汇总

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