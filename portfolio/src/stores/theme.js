import { onMounted, onUnmounted, ref } from 'vue'
import { defineStore } from 'pinia'

const useTheme = defineStore('theme', () => {
  const darkMode = ref(true)

  return { darkMode }
})

export default useTheme
