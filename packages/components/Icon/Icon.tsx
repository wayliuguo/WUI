import { defineComponent } from 'vue'

const name = 'w-icon'

export default defineComponent({
  name,
  setup() {
    return () => {
      return (
        <span class="w-icon">&#xe695;</span>
      )
    }
  }
})
