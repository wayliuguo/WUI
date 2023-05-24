import { extend } from "@w-ui/utils"
import { getCurrentInstance } from "vue"

// expose public api
export function useExpose<T = Record<string, any>>(apis: T) {
  const instance = getCurrentInstance()
  if (instance) {
    extend(instance.proxy as object, apis)
  }
}
