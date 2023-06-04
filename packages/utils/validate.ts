import { type Numeric } from './basic'

export const isDef = <T>(val: T): val is NonNullable<T> =>
  val !== undefined && val !== null

export const isNumeric = (val: Numeric): val is string =>
  typeof val === 'number' || /^\d+(\.\d+)?$/.test(val)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

// eslint-disable-next-line @typescript-eslint/ban-types
export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isPromise = <T = any>(val: unknown): val is Promise<T> =>
  isObject(val) && isFunction(val.then) && isFunction(val.catch)
