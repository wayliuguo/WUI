import { isObject } from './validate'

export const extend = Object.assign

export type Numeric = number | string

export function get(object: any, path: string): any {
  const keys = path.split('.')
  let result = object

  keys.forEach(key => {
    result = isObject(result) ? result[key] ?? '' : ''
  })

  return result
}
