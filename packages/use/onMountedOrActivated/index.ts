import { nextTick, onMounted, onActivated } from 'vue'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function onMountedOrActivated(hook: () => any) {
  let mounted: boolean

  onMounted(() => {
    hook()
    nextTick(() => {
      mounted = true
    })
  })

  onActivated(() => {
    if (mounted) {
      hook()
    }
  })
}
