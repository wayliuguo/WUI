import { extend, isObject, mountComponent, usePopupState } from '@w-ui/utils'
import { ToastOptions, ToastType, ToastWrapperInstance } from './types'
import { getCurrentInstance, ref, watch } from 'vue'
import WToast from './Toast'
import { inBrowser } from '@w-ui/use/utils'

const defaultOptions: ToastOptions = {
  icon: '',
  type: 'text',
  message: '',
  className: '',
  overlay: false,
  onClose: undefined,
  onOpened: undefined,
  duration: 2000,
  teleport: 'body',
  iconSize: undefined,
  iconPrefix: undefined,
  position: 'middle',
  transition: 'van-fade',
  forbidClick: false,
  loadingType: undefined,
  overlayClass: '',
  overlayStyle: undefined,
  closeOnClick: false,
  closeOnClickOverlay: false
}

let queue: ToastWrapperInstance[] = []
let allowMultiple = false
let currentOptions = extend({}, defaultOptions)

// default options of specific type
const defaultOptionsMap = new Map<string, ToastOptions>()

function parseOptions(message: string | ToastOptions): ToastOptions {
  if (isObject(message)) {
    return message
  }
  return { message }
}

function createInstance() {
  const { instance, unmount } = mountComponent({
    setup() {
      const message = ref('')
      const { open, state, close, toggle } = usePopupState()

      const onClosed = () => {
        if (allowMultiple) {
          queue = queue.filter(item => item !== instance)
          unmount()
        }
      }

      const render = () => {
        const attrs: Record<string, unknown> = {
          onClosed,
          'onUpdate:show': toggle
        }
        return <WToast {...state} {...attrs} />
      }

      // support dynamic modification of message
      watch(message, val => {
        state.message = val
      })

      // rewrite render function
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ;(getCurrentInstance() as any).render = render

      return {
        open,
        close,
        message
      }
    }
  })

  return instance as ToastWrapperInstance
}

function getInstance() {
  if (!queue.length || allowMultiple) {
    const instance = createInstance()
    queue.push(instance)
  }

  return queue[queue.length - 1]
}

export function showToast(options: string | ToastOptions = {}) {
  if (!inBrowser) {
    return {} as ToastWrapperInstance
  }

  const toast = getInstance()
  const parsedOptions = parseOptions(options)

  toast.open(
    extend(
      {},
      currentOptions,
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      defaultOptionsMap.get(parsedOptions.type || currentOptions.type!),
      parsedOptions
    )
  )

  return toast
}

const createMethod = (type: ToastType) => (options: string | ToastOptions) =>
  showToast(extend({ type }, parseOptions(options)))

export const showLoadingToast = createMethod('loading')
export const showSuccessToast = createMethod('success')
export const showFailToast = createMethod('fail')

export const closeToast = (all?: boolean) => {
  if (queue.length) {
    if (all) {
      queue.forEach(toast => {
        toast.close()
      })
      queue = []
    } else if (!allowMultiple) {
      queue[0].close()
    } else {
      queue.shift()?.close()
    }
  }
}

export function setToastDefaultOptions(options: ToastOptions): void
export function setToastDefaultOptions(
  type: ToastType,
  options: ToastOptions
): void
export function setToastDefaultOptions(
  type: ToastType | ToastOptions,
  options?: ToastOptions
) {
  if (typeof type === 'string') {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    defaultOptionsMap.set(type, options!)
  } else {
    extend(currentOptions, type)
  }
}

export const resetToastDefaultOptions = (type?: ToastType) => {
  if (typeof type === 'string') {
    defaultOptionsMap.delete(type)
  } else {
    currentOptions = extend({}, defaultOptions)
    defaultOptionsMap.clear()
  }
}

export const allowMultipleToast = (value = true) => {
  allowMultiple = value
}
