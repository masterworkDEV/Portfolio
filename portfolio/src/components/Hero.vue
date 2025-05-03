<template>
  <section class="px-20 max-md:pt-10 max-xl:px-10 max-sm:px-5">
    <div class="pt-48 max-sm:pt-24 flex justify-between max-sm:flex-col">
      <div class="w-full">
        <h3 class="pb-3 text-2xl max-md:text-xl animate__animated animate__flipInY">Hello, i'm</h3>
        <h1
          class="pb-3 text-6xl max-xl:text-5xl max-sm:text-3xl animate__animated animate__flipInX animate__delay-1s"
        >
          Godwin M. Kelvin
        </h1>
        <p
          class="pb-3 tracking-wide leading-7 pr-24 max-sm:pr-0 animate__animated animate__fadeIn animate__delay-2s"
        >
          I'm a software developer with a creative mind and a problem-solving spirit. I believe in
          writing clean, maintainable code and am committed to delivering high-quality software that
          meets users' needs.
        </p>
        <div
          class="flex items-center gap-3 mt-5 max-xl:mb-10 animate__animated animate__fadeInUp animate__delay-3s"
        >
          <a
            href="#about"
            class="flex items-center justify-center gap-2 w-48 h-10 text-white hover:bg-white hover:text-black rounded max-xl:w-40 max-sm:w-28 max-sm:text-sm transition-all"
            :class="theme.darkMode ? 'bg-[#7562e0]' : 'bg-[#333]'"
          >
            <button>
              <span> About Me </span>
              <FontAwesomeIcon :icon="faUser" size="xs" />
            </button>
          </a>

          <a
            href="https://www.canva.com/design/DAGlAqwpLng/giGL_s9SN1sdn6cUp90ErQ/view?utm_content=DAGlAqwpLng&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2e62da40b7"
            target="blank"
            class="flex items-center justify-center gap-2 w-48 h-10 border-2 hover:bg-[#7562e0] rounded max-xl:w-40 max-sm:w-28 max-sm:text-sm transition-all"
            :class="theme.darkMode ? 'border-[#7562e0]' : 'border-[#333]'"
          >
            <button class="hover:animate-none animate__zoomIn animate-bounce animate__delay-5s">
              <span> Resume </span>

              <FontAwesomeIcon :icon="faEye" size="xs" class="" />
            </button>
          </a>
        </div>
      </div>
      <div class="animate__animated animate__fadeIn animate__delay-4s w-full h-full">
        <video
          v-if="theme.darkMode"
          :src="video"
          loop
          autoplay
          class="w-full h-full object-cover rounded-lg max-xl:h-full max-md:h-3/4 max-sm:h-80"
        ></video>
        <video
          v-else
          :src="video2"
          loop
          autoplay
          class="w-full h-full object-cover rounded-lg max-xl:h-full max-md:h-3/4 max-sm:h-80"
        ></video>
      </div>
    </div>
  </section>
  <div class="h-16" :class="theme.darkMode ? 'bg-[#181824]' : 'bg-[#333]'"></div>
</template>

<script setup>
import avatar from '../assets/images/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import video from '../assets/videos/portfolio.mp4'
import video2 from '../assets/videos/portfolio dark.mp4'
import useTheme from '@/stores/theme'

const theme = useTheme()
</script>

<style>
</style>
