# Icon

## props
```
export const iconProps = {
  dot: Boolean,
  tag: makeStringProp<keyof HTMLElementTagNameMap>('i'),
  name: String,
  size: numericProp,
  badge: numericProp,
  color: String,
  badgeProps: Object as PropType<Partial<BadgeProps>>,
  classPrefix: String
}

export type IconProps = ExtractPropTypes<typeof iconProps>
```

## setup

## isImage
- 判断是否图片链接
```
const isImage = (name?: string) => name?.includes('/')
const isImageIcon = isImage(name)
```
## render
```
return (
  <Badge
    dot={dot}
    tag={tag}
    class={[
      classPrefix.value,
      isImageIcon ? '' : `${classPrefix.value}-${name}`
    ]}
    style={{
      color,
      fontSize: addUnit(size)
    }}
    content={badge}
    {...props.badgeProps}
  >
    {slots.default?.()}
    {isImageIcon && <img class={bem.e('image')} src={name} />}
  </Badge>
)
```

## style
- [iconfont](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=2302170)
- common.less 中的数据来源与下载后的iconfont.css
- encode-woff2.less 文件使用[网站](https://transfonter.org/)，开启 Base64 encode 把iconfont.tff 文件转换而来。
``` less
@import './common.less';
@import './encode-woff2.less';

@font-face {
  font-weight: normal;
  font-style: normal;
  font-display: auto;
  font-family: 'w-icon'; /* Project id 2302170 */
  src: url('//at.alicdn.com/t/c/font_2302170_i11uosdpz6q.woff2?t=1682390553114')
      format('woff2'),
    url('//at.alicdn.com/t/c/font_2302170_i11uosdpz6q.woff?t=1682390553114')
      format('woff');
}

.w-icon {
  &__image {
    display: block;
    width: 1em;
    height: 1em;
    object-fit: contain;
  }
}

```