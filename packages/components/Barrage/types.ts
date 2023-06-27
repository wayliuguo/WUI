import { ComponentPublicInstance } from 'vue'
import { BarrageProps } from './Barrage'

export interface BarrageExpose {
  play(): void
  pause(): void
}

export type BarrageInstance = ComponentPublicInstance<
  BarrageProps,
  BarrageExpose
>

export interface BarrageThemeVars {
  barrageFontSize?: string
  barrageSpace?: string
  barrageFont?: string
  barrageColor?: string
}
