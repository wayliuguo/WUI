import {
  createNamespace,
  makeStringProp,
  numericProp,
  truthProp
} from '@w-ui/utils'
import { PropType, defineComponent } from 'vue'

export type ImageFit = 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'

export type ImagePosition =
  | 'center'
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | string

export const imageProps = {
  src: String,
  alt: String,
  fit: String as PropType<ImageFit>,
  position: String as PropType<ImagePosition>,
  round: Boolean,
  block: Boolean,
  width: numericProp,
  height: numericProp,
  radius: numericProp,
  lazyLoad: Boolean,
  iconSize: numericProp,
  showError: truthProp,
  errorIcon: makeStringProp('photo-fail'),
  iconPrefix: String,
  showLoading: truthProp,
  loadingIcon: makeStringProp('photo')
}

const name = 'w-image'

const bem = createNamespace('image')

export default defineComponent({
  name,

  props: imageProps,

  emits: ['load', 'error'],

  setup(props, { emit, slots }) {}
})
