# Vue
- 主要记录一些内置函数及API

## PropType
- 用于在用运行时 props 声明时给一个 prop 标注更复杂的类型定义。
- 例子解析
  - 提供一个比 `Object` 更具体的类型
  - 提供一个比 `String` 更具体的类型
```
export type CellSize = 'normal' | 'large'
interface Book {
  title: string
  author: string
  year: number
}

export const props = {
  ...
  size: String as PropType<CellSize>,
  book: Object as PropType<Book>
}
```

## ExtractPropTypes
`ExtractPropTypes` 是 `Vue` 内置的函数，用于从组件属性的定义对象中提取出 `Props` 类型。[Loading 的 ExtractPropTypes](loading.md#props)

## CSSProperties
用于扩展在样式属性绑定上允许的值的类型。[Badge 的 CSSProperties](badge.md#style-computed)


## ComputedRef
响应式对象函数类型[用法](row.html#row-key)

## InjectionKey && provide
InjectionKey 类型是一个用于创建注入键（也称为依赖项注入）的工具，它可以确保提供和注入的对象类型相匹配。
```
export interface TreeContext {
  slots: SetupContext['slots']
  // emit: SetupContext<typeof treeEmitts>['emit']
}
// 此变量作为提供出去的属性
export const treeInjectKey: InjectionKey<TreeContext> = Symbol()

provide(treeInjectKey, {
  slots: useSlots()
})
```

## ComponentInternalInstance
其是一个内部类型，用于表示组件实例。

## expose
- 可以暴露组件内部的数据或方法
- 不可以暴露`props`
- [expose hooks](hooks.html#use-expose-ts)
```
// expose
setup(props, {expose}) {
  name: 'w-checkbox'
  const toggle = () => {}
  expose({toggle})
}

...
// 使用
const checkboxRef = ref()
const toggle = () => {
  checkboxRef.value.toggle()
}

<w-checkbox ref="checkboxRef" v-model="checked">复选框</w-checkbox>
<w-button @click="toggle">toggle</w-button>
```

## getCurrentInstance
- 用于获取当前组件实例，可以在组件的任何地方调用。
- 返回一个组件实例对象，包含了当前组件实例的所有属性和方法。

## WatchSource
- 是一个泛型接口，用于表示可以作为监视器的值的类型。

## createApp
- 创建一个应用实例。
- 第一个参数是根组件。第二个参数可选，它是要传递给根组件的 props。
```
function createApp(rootComponent: Component, rootProps?: object): App
```

## app.mount
- 将应用实例挂载在一个容器元素中。
```
interface App {
  mount(rootContainer: Element | string): ComponentPublicInstance
}
```

## app.unmount
- 卸载一个已挂载的应用实例。卸载一个应用会触发该应用组件树内所有组件的卸载生命周期钩子。
```
interface App {
  unmount(): void
}
```

## ComponentPublicInstance
- 表示组件实例公共接口
- 第一个泛型参数表示组件 props 的类型
- 第一个泛型参数表示组件数据的类型
```
ComponentPublicInstance<{}, any>
```

## inheritAttrs
- 用于控制是否启用默认的组件 `attribute` 透传行为。
- 默认情况下没有被子组件解析为 `props` 的 `attribute` 会作为 `HTML attribute` 挂载到根元素上。
```
interface ComponentOptions {
  inheritAttrs?: boolean // 默认值：true
}
```
