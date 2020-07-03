### 项目构建
1. 新建项目目录  mi.com
2. 对项目进行初始化 `$ npm init -y`
3. 构建项目的目录结构

### 项目目录结构
- 项目名称
    - [node_modules]  存放第三方模块 无需手动创建
    - [src]  存放项目源代码
        - [html]
        - [style]
        - [js]
        - [img]
    - [dist]  存放工具生成的代码 无需手动创建
        - [html]
        - [style]
        - [js]
        - [img]
    - gulpfile.js    gulp配置文件
    - package.json   依赖记录
    - .gitignore     git忽略列表
    - README.md       项目说明

### gulp
gulp是一个基于nodejs的流式自动化构建工具  
https://www.gulpjs.com.cn/

项目代码 分为三个部分
1. 自己写的代码  源代码
2. 第三方代码
3. 工具生成的代码

安装gulp
```bash
# 全局安装gulp 和 gulp命令行工具
# 全局安装可以在任何目录下执行
$ npm i gulp -g
$ npm i gulp-cli -g


# 依赖安装
# 依赖安装必须在项目根目录下执行
$ npm i gulp --save-dev  |  $ npm i gulp -D


```