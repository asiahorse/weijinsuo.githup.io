# 微金所项目实战

## 1. 搭建 Bootstrap 页面骨架及项目目录结构

```
├─ /weijinsuo/ ··················· 项目所在目录
└─┬─ /css/ ······················· 我们自己的CSS文件
  ├─ /font/ ······················ 使用到的字体文件
  ├─ /img/ ······················· 使用到的图片文件
  ├─ /js/ ························ 自己写的JS脚步
  ├─ /lib/ ······················· 从第三方下载回来的库【只用不改】
  ├─ /favicon.ico ················ 站点图标
  └─ /index.html ················· 入口文件
```

### 1.1. 约定编码规范

#### 1.1.1. HTML约定

- 所有的CSS引用在HEAD中，按照第三方优先的顺序排列，我们自己的CSS肯定在最下面
- 所有JS文件都引用在Body的最下面（加载的缘由），按照依赖顺序排序
- 如果只是使用bootstrap的样式的话，就不用引用js文件
- 在head中引入必要的CSS文件，优先引用第三方的CSS，方便我们自己的样式覆盖
- 在body末尾引入必要的JS文件，优先引用第三方的JS，注意JS文件之间的依赖关系，比如bootstrap.js依赖jQuery，那就应该先引用jquery.js 然后引用bootstrap.js


#### 1.1.2. CSS约定

- 除了公共级别样式，其余样式全部由 模块前缀
- 尽量使用 直接子代选择器， 少用间接子代 避免错杀

### 1.2. HTML5文档结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>页面标题</title>
</head>
<body>
  
</body>
</html>
```

### 1.3. Viewport设置

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0">
```

> html中插入视口设置，可以通过emmet __meta:vp__ 插入

### 1.4. 浏览器兼容模式

```html
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

> html中插入兼容模式设置，可以通过emmet __meta:compat__ 插入

### 1.5. favicon（站点图标）

```html

```

> html中插入图标链接，可以通过emmet __link:favicon__ 插入

### 1.6. 引入相应的第三方文件

```html
```

### 1.7. 在我们默认的样式表中将默认字体设置为：

```css
body{
  font-family: "Helvetica Neue", 
                Helvetica, 
                Microsoft Yahei, 
                Hiragino Sans GB, 
                WenQuanYi Micro Hei, 
                sans-serif;
}
```

## 2. 完成页面空结构

> 先划分好页面中的大容器，然后在具体看每一个容器中单独的情况

```html
```

## 3. 构建顶部通栏

```html
```

### 3.1. container类

- 

```html
```

### 3.2. 栅格系统

- 

#### 3.2.1. row类

- 

```html
```

#### 3.2.2. col-\*-\*类

- 

```html
```

> 

### 3.2. 字体图标

```css
```

```html
```

#### 字体文件格式

- eot : embedded-opentype
- svg : svg
- ttf : truetype
- woff : woff

#### icomoon

### 3.3. 二维码图片展示

```css
```

### 3.4. 按钮样式生成

- http://blog.koalite.com/bbg/
- 可以通过界面生成一个新的按钮样式

```css
```

### 3.5. 小屏幕隐藏

```html

```

或者

```html

```

- 

## 4. 导航通栏

- 

```html
```

### 4.1. Bootstrap扩展

- 通过bootstrap文档对导航条样式的设置发现，其实本身是有一个类似于主题的概念
- navbar-default：默认的外观
- navbar-inverse：暗色背景的样式
- 

```css
```

### 4.2. 品牌logo

- 

### 4.3. 菜单行高调整

- 
