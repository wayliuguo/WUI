import { extend } from "@w-ui/utils"
import { getCurrentInstance } from "vue"

// expose public api
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useExpose<T = Record<string, any>>(apis: T) {
  const instance = getCurrentInstance()
  if (instance) {
    extend(instance.proxy as object, apis)
  }
}
