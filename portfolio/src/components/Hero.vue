<template>
  <header
    class="min-h-screen pt-40 px-16 flex items-center justify-center max-xl:px-7 max-sm:pt-24 max-sm:px-4"
  >
    <div class="flex items-center gap-16 w-full max-w-7xl max-xl:gap-8 max-md:gap-4 max-sm:block">
      <div class="w-full">
        <h3 class="text-2xl text-[#7562e0] animate-fadeIn max-md:text-xl">Hello, i'm</h3>
        <h1 class="text-6xl text-white animate-slideInUp max-xl:text-5xl max-sm:text-3xl">
          Godwin Kelvin
        </h1>
        <h2 class="text-4xl text-white mt-2 max-xl:text-3xl max-sm:text-2xl">
          a <span class="text-[#7562e0] font-bold">{{ displayedRole }}</span>
          <span class="cursor">|</span>
        </h2>
        <p class="animated-text text-gray-400 mt-4 leading-relaxed pr-24 max-sm:pr-0">
          <span
            v-for="(char, index) in animatedText"
            :key="index"
            :style="{ '--delay': `${index * 0.05}s` }"
            :class="{ 'visible-char': visibleChars > index }"
          >
            {{ char }}
          </span>
        </p>
        <div class="flex items-center gap-4 mt-8 animate-fadeIn max-sm:justify-center">
          <a
            href="#about"
            class="flex items-center justify-center gap-2 w-48 h-10 bg-[#7562e0] text-white rounded-full font-bold hover:bg-white hover:text-black transition-all max-xl:w-40 max-sm:w-full max-sm:text-sm"
          >
            <button class="flex items-center gap-2 p-2">
              <span>About Me</span>
              <FontAwesomeIcon :icon="faUser" size="xs" />
            </button>
          </a>
          <a
            href="https://www.canva.com/design/DAGlAqwpLng/giGL_s9SN1sdn6cUp90ErQ/view?utm_content=DAGlAqwpLng&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h2e62da40b7"
            target="_blank"
            class="flex items-center justify-center gap-5 w-48 h-10 border-2 border-[#7562e0] text-[#7562e0] rounded-full font-bold hover:bg-[#7562e0] hover:text-white transition-all max-xl:w-40 max-sm:w-full max-sm:text-sm"
          >
            <button class="flex items-center gap-2 p-2">
              <span>Resume</span>
              <FontAwesomeIcon :icon="faEye" size="xs" />
            </button>
          </a>
        </div>
      </div>
      <div class="w-full flex justify-center max-sm:mt-8">
        <!-- <img
          :src="image"
          alt="Godwin Kelvin"
          class="w-full max-w-md h-auto rounded-xl shadow-lg animate-fadeInScale max-xl:h-full max-md:h-3/4 max-sm:h-80"
        /> -->
        <video :src="video" loop preload="true" muted autoplay></video>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye, faUser } from '@fortawesome/free-solid-svg-icons'
import video from '../assets/videos/portfolio.mp4'

const animatedText = ref(
  "I'm a software developer with a creative mind and a problem-solving spirit. I believe in writing clean, maintainable code and am committed to delivering high-quality software that meets users' needs."
)
const roles = ['Full Stack Developer', 'Designer', 'Problem Solver', 'SEO Specialist']

const visibleChars = ref(0)
const animationSpeed = 20
let lastFrameTime = 0

// State for the role animation
const displayedRole = ref('')
const roleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)

const animateText = (currentTime) => {
  if (!lastFrameTime) lastFrameTime = currentTime
  const deltaTime = currentTime - lastFrameTime

  if (deltaTime > animationSpeed) {
    if (visibleChars.value < animatedText.value.length) {
      visibleChars.value++
    }
    lastFrameTime = currentTime
  }

  if (visibleChars.value < animatedText.value.length) {
    requestAnimationFrame(animateText)
  }
}

const typeRole = () => {
  const currentRole = roles[roleIndex.value]

  if (!isDeleting.value) {
    displayedRole.value = currentRole.substring(0, charIndex.value + 1)
    charIndex.value++

    if (displayedRole.value === currentRole) {
      isDeleting.value = true
      setTimeout(typeRole, 2000) // Pause for 2 seconds before deleting
    } else {
      setTimeout(typeRole, 100) // Typing speed
    }
  } else {
    displayedRole.value = currentRole.substring(0, charIndex.value - 1)
    charIndex.value--

    if (displayedRole.value === '') {
      isDeleting.value = false
      roleIndex.value = (roleIndex.value + 1) % roles.length
      setTimeout(typeRole, 500) // Pause briefly before typing next word
    } else {
      setTimeout(typeRole, 50) // Deleting speed
    }
  }
}

onMounted(() => {
  requestAnimationFrame(animateText)
  typeRole()
})
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.animate-fadeIn {
  animation: fadeIn 1s ease-out forwards;
}
.animate-slideInUp {
  animation: slideInUp 1s ease-out 0.5s forwards;
}
.animate-fadeInScale {
  animation: fadeInScale 1s ease-out 1.5s forwards;
}

.animated-text span {
  opacity: 0;
  transition: opacity 0.3s ease-in-out var(--delay);
}
.animated-text .visible-char {
  opacity: 1;
}
.cursor {
  animation: blink 1s step-end infinite;
}
</style>