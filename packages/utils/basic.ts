import { ComponentPublicInstance } from 'vue'
import { isObject } from './validate'

// eslint-disable-next-line @typescript-eslint/no-empty-function
export function noop() {}

export const extend = Object.assign

export type Numeric = number | string

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function get(object: any, path: string): any {
  const keys = path.split('.')
  let result = object

  keys.forEach(key => {
    result = isObject(result) ? result[key] ?? '' : ''
  })

  return result
}

export type Writeable<T> = { -readonly [P in keyof T]: T[P] }

export function pick<T, U extends keyof T>(
  obj: T,
  keys: ReadonlyArray<U>,
  ignoreUndefined?: boolean
) {
  return keys.reduce((ret, key) => {
    if (!ignoreUndefined || obj[key] !== undefined) {
      ret[key] = obj[key]
    }
    return ret
  }, {} as Writeable<Pick<T, U>>)
}

// eslint-disable-next-line
export type ComponentInstance = ComponentPublicInstance<{}, any>