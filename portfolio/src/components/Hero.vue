<template>
  <section class="px-16 max-md:pt-10 max-xl:px-7 max-sm:px-4">
    <div class="pt-48 max-sm:pt-24 flex justify-between max-sm:flex-col">
      <div class="w-full">
        <h3 class="pb-3 text-2xl max-md:text-xl animate__animated animate__flipInY">Hello, i'm</h3>
        <h1 class="pb-3 text-6xl max-xl:text-5xl max-sm:text-3xl">Godwin M. Kelvin</h1>
        <p
          class="animated-text pb-3 tracking-wide leading-7 pr-24 max-sm:pr-0 animate__animated animate__fadeIn animate__delay-2s"
        >
          <span
            class=""
            v-for="(char, index) in text"
            :key="index"
            :style="{
              '--delay': index * 0.1 + 's',
              opacity: visibleChars > index ? 1 : 0,
            }"
          >
            {{ char }}
          </span>
        </p>
        <div
          class="flex items-center max-sm:justify-center gap-3 mt-5 max-xl:mb-10 animate__animated animate__fadeInUp animate__delay-3s"
        >
          <a
            href="#about"
            class="flex bg-[#7562e0] items-center justify-center gap-2 w-48 max-sm:w-full h-10 text-white hover:bg-white hover:text-black rounded max-xl:w-40 max-sm:text-sm transition-all"
          >
            <button>
              <span> About Me </span>
              <FontAwesomeIcon :icon="faUser" size="xs" />
            </button>
          </a>

          <a
            href="https://www.canva.com/design/DAGlAqwpLng/giGL_s9SN1sdn6cUp90ErQ/view?utm_content=DAGlAqwpLng&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2e62da40b7"
            target="blank"
            class="flex items-center justify-center gap-2 w-48 max-sm:w-full h-10 border-2 hover:bg-[#7562e0] border-[#7562e0] rounded max-xl:w-40 max-sm:text-sm transition-all"
          >
            <button class="hover:animate-none animate__zoomIn animate-bounce animate__delay-5s">
              <span> Resume </span>

              <FontAwesomeIcon :icon="faEye" size="xs" class="" />
            </button>
          </a>
        </div>
      </div>
      <div class="w-full h-full flex justify-center items-center">
        <video

          :src="video"
          loop
          autoplay
          class="w-full h-full object-cover rounded-lg max-xl:h-full max-md:h-3/4 max-sm:h-80"
        ></video>
      </div>
    </div>
  </section>
  <div class="h-14 bg-[#181824] max-sm:hidden"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import video from '../assets/videos/portfolio.mp4'
import useTheme from '@/stores/theme'

//  theme
const theme = useTheme()
// animated videos,
const currentIndex = ref(0)




const text = ref(
  "I'm a software developer with a creative mind and a problem-solving spirit. I believe in writing clean, maintainable code and am committed to delivering high-quality software that meets users' needs."
)
const visibleChars = ref(0)
const animationSpeed = 100 // milliseconds per character

onMounted(() => {
  let interval = setInterval(() => {
    if (visibleChars.value < text.value.length) {
      visibleChars.value++
    } else {
      clearInterval(interval)
    }
  }, animationSpeed)
})
</script>

<style>
.animated-text {
  overflow: hidden; /* Hide characters initially */
}

.animated-text span {
  opacity: 0;
  transition: opacity 0.3s ease-in-out var(--delay);
}
</style>
