# tools_ui

## 简介
**依托element-ui + vue搭建的一个工具类组件库，提供一些element-ui未曾提供的或者定制化业务的一些组件**

## 安装
```
npm install @code_life/tools_ui
```

### 引入
在main.js文件内导入
```
import toolsUi from "@code_life/tools_ui"
//全局引入
Vue.use(toolsUi)
//按需引入（使用多数据下拉组件）
Vue.use(toolsUi.MuchSelect)

```

### 使用
```
<tempalte>
  <div>
    <ClMuchSelect v-model="val" :options="options" />
  </div>
</tempalte>

```