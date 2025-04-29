import { onMounted, onUnmounted, ref } from 'vue'
import { defineStore } from 'pinia'

const useIntersectionObserverStore = defineStore('intersection-observer', () => {
  return { isVisible, observeElement, unobserveElement }
})

export default useIntersectionObserverStore
