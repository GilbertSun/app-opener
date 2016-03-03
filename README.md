# Open App from Browser

## Description

Open App from Browser(iOS, Android), if App not installed, tutor to download app

## 用法

库导出为 `umd` 规范, 并将样式和图片都打包进 `js` 文件,所以只要引入这个 `js` 文件即可

引入方式

1. 标签

当你没有 cmd或者 amd 环境的时候, 会在全局引入`AppOpener` 对象

```
<script src="./dist/index.js"></script>

// console.log(AppOpener)
```

2. 模块加载器

支持 AMD, CMD, ES2015, 模块

## `API`

### `AppOpener.config` 

参数: option {Object}

desc: 传入配置项,暂时只有下载地址

### `AppOpener.openApp`

参数: (path{String}, fallback{Boolean}): path 是要打开的地址,请询问 app 端, fallback 是控制是否自动去下载页

## demo

```javascript
<span className="career-header__App">
    <a className="career-header__download" href="http://cv.qiaobutang.com/help/getApp" target="_blank">下载 App</a>
    <span className="career-header__open" onClick={() => openApp(`qiaobutangapp://career/${this.context.UID}`, true)}>打开 App</span>
</span>
``` 

