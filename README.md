# mf-demo
Umi支持Webpack5的Module Federation的Demo案例

### 启动
* `yarn start:mf1` 启动mf1项目
* `yarn start:mf2` 启动mf2项目




### 应用详情
1. mf1 share Button 组件， name: mf1     port:3000
2. mf2 主应用 ， name: mf2  deps: mf1    port:3001    /
3. micro 子应用  name: mf3  deps: mf1    port:3002
