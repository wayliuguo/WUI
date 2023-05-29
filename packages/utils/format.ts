import { CSSProperties } from 'vue'
import { Numeric } from './basic'
import { isDef, isNumeric } from './validate'

export function addUnit(value?: Numeric): string | undefined {
  if (isDef(value)) {
    return isNumeric(value) ? `${value}px` : String(value)
  }
  return undefined
}

export function getSizeStyle(
  originSize?: Numeric | Numeric[]
): CSSProperties | undefined {
  if (isDef(originSize)) {
    if (Array.isArray(originSize)) {
      return {
        width: addUnit(originSize[0]),
        height: addUnit(originSize[1])
      }
    }
    const size = addUnit(originSize)
    return {
      width: size,
      height: size
    }
  }
}

export function getZIndexStyle(zIndex?: Numeric) {
  const style: CSSProperties = {}
  if (zIndex !== undefined) {
    style.zIndex = +zIndex
  }
  return style
}
