import { defineComponent } from "vue";
import Checker, { checkerProps } from "../Checkbox/Checker";
import { createNamespace, pick } from "@w-ui/utils";

const name = 'w-radio'
const bem = createNamespace('radio')

export default defineComponent({
  name,
  props: checkerProps,
  emits: ['update:modelValue'],
  setup(props, { emit, slots}) {
    return () => {
      
    }
  }
})