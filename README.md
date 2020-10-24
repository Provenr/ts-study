# ts-study

## 目录结构
- ### package  存放所有的项目和子项目
- ### script  存放项目统一的构建、监控脚本
- ### 子项目结构
    - 各子项目，源码入口统一为 src/index.js；
    - 各子项目，编译出口统一为 build/index.js；
    - 各子项目，IDE 辅助提示统一为 build/index.d.ts；
    - 各子项目，基于 ES6 语法、使用 Babel 编译；

## command

 1. 全局安装 lerna；
    ```
    npm install -g lerna
    ```
 2. 初始化
    ```
    lerna init
 3. 构建各子项目间的依赖关系
    ```
    lerna bootstrap
    ```
    > `lerna bootstrap`后,子项目间是过“快捷方式”进行运接,类似于npm i
 4. 版本发布
    ```
    lerna publish
    ```                                    
    > 将包publish到npm上；注意要先 确认镜像是否为npm (日常开发会切换到淘宝源,提升速度); 再使用`npm login` 登录npm源，否则会失败；
使用--hoist 选项后，所有公共的依赖都只会安装在根目录的node_modules目录中去,而不会在每个包目录下的node_modules中都保留各自的依赖包。
                                                                                
    publish 流程:
    - 运行lerna updated来决定哪一个包需要被publish
    - 如果有必要，将会更新`lerna.json`中的`version`
    - 将所有更新过的的包中的`package.json`的`version`字段更新
    - 将所有更新过的包中的依赖更新
    - 为新版本创建一个`git commit`或`tag`
                                                                             
  - 删除所有项目的node_modules目录
    ```
    lerna clean 
    ```
  - 默认为所有的项目运行npm run [script]脚本，可以指定项目；
    ```
     lerna run [script] 
    ```
  - 列出下次发版lerna publish要更新的包。
    ```
    lerna changed 
    ```

  - 可以指定为某一个或所有的包安装依赖
    > 依赖可以是外部(npm i 安装的)也可以是内部依赖(packages/下的包，会创建符号链接)，
    
    example：
    ```
    lerna add <package>[@version] [--dev] [--exact] [--peer] ：
    
    lerna add babel , 该命令会在package-1和package-2下安装babel
    lerna add react --scope=package-1 ,该命令会在package-1下安装react
    lerna add package-2 --scope=package-1，该命令会在package-1下安装package-2
    ```

 - 创建一个lerna管理的包
    ```
     lerna create <name> [loc]
    ```
 - 控制台打印 packages下的包名
    ```
    lerna ls
    ```
- 类似npm link,创建软连接 ,但是实测怎么不起作用？(lerna version:v3.22.0)
    ```
    lerna link
    ```
