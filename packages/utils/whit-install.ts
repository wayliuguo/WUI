import type { App, Component } from 'vue'

type EventShim = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): {
    $props: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onClick?: (...args: any[]) => void
    }
  }
}

export type WithInstall<T> = T & {
  install(app: App): void
} & EventShim

export function withInstall<T extends Component>(options: T) {
  ;(options as Record<string, unknown>).install = (app: App) => {
    const { name } = options
    if (name) {
      app.component(name, options)
    }
  }

  return options as WithInstall<T>
}
