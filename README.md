简书项目总结：

一、项目介绍：

  使用React来制作简书PC端

二、汇总

1、为了让css样式独立存在：安装使用第三方模块“styled-components”即CSS in JS 
  npm install --save styled-components
  但是因Styled-components--V4 injectGlobal的弃用，详情见如下网址：
  https://blog.csdn.net/qq_32063079/article/details/83277054

2、因为各浏览器的内核不同，为了实现样式的统一，使用reset.css