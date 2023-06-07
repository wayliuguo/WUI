# 工程搭建

## 搭建monorepo环境
使⽤pnpm安装包速度快，磁盘空间利⽤率⾼效，使⽤pnpm 可以快速建⽴monorepo，so ~ 这⾥我们使⽤pnpm workspace来实现monorepo。
```
npm i pnpm -g // 全局安装pnpm
pnpm init // 初始化package.json配置⽂件 私有库
pnpm install vue typescript // 全局下添加依赖
```
使⽤pnpm必须要建⽴.npmrc⽂件，shamefully-hoist = true，否则安装的模块⽆法放置到node_modules⽬录下
**.npmrc**
```
shamefully-hoist = true
```
**初始化typescript**
```
pnpm tsc --init
```
```
{
  "compilerOptions": {
    "module": "ESNext", // 打包模块类型ESNext
    "declaration": false, // 默认不要声明文件 
    "noImplicitAny": true, // 支持类型不标注可以默认any
    "removeComments": true, // 删除注释
    "moduleResolution": "node", // 按照node模块来解析
    "esModuleInterop": true, // 支持es6,commonjs模块
    "jsx": "preserve", // jsx 不转
    "noLib": false, // 不处理类库
    "target": "es6", // 遵循es6版本
    "sourceMap": true,
    "lib": [ // 编译时用的库
      "ESNext",
      "DOM"
    ],
    "allowSyntheticDefaultImports": true, // 允许没有导出的模块中导入
    "experimentalDecorators": true, // 装饰器语法
    "forceConsistentCasingInFileNames": true, // 强制区分大小写
    "resolveJsonModule": true, // 解析json模块
    "strict": true, // 是否启动严格模式
    "skipLibCheck": true // 跳过类库检测
  },
  "exclude": [ // 排除掉哪些类库
    "node_modules",
    "**/__tests__",
    "dist/**"
  ]
}
```

## pnpm monorepo 配置
通过创建workspace 将多个项目合并要一个仓库中，每个仓库的根目录需要配置**package.json**
```
packages:
  - play # 存放我们组件测试的时候的代码
  - docs # 存放我们组件文档的
  - packages # 组件目录
    - components
    - theme-chalk
    - use
    - utils
```
以**components**为例，安装到根目录
```
{
  "name": "@w-ui/components",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

```
npm install @w-ui/components -w
```
- -w: 代表安装到工作区根目录


  