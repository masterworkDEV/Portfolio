<template>
  <header class="header fixed top-0 right-0 left-0 z-40">
    <nav
      class="nav right-0 left-0 top-0 pt-8 pb-8 max-sm:pt-4 max-sm:pb-4 z-30"
      :class="theme.darkMode ? 'bg-[#1a1a29]' : 'bg-[#fafafa] border-b border-gray-200'"
    >
      <div class="flex flex-wrap items-center justify-between px-16 max-xl:px-7 max-sm:px-4">
        <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
          <span
            class="self-center text-2xl max-sm:text-xl font-semibold whitespace-nowrap text-[#7562e0]"
            >masterworkDEV</span
          >
        </a>
        <button
          @click="handleNavbar"
          data-collapse-toggle="navbar-default"
          type="button"
          class="flex items-center p-2 w-10 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover: dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bord nav-links"
          >
            <li class="hover:underline cursor-pointer">
              <a href="#" class="block py-2 px-3 rounded-sm md:p- text-sm" aria-current="page"
                >Home</a
              >
            </li>
            <li class="hover:underline cursor-pointer">
              <a href="#about" class="block py-2 px-3 rounded-sm text-sm">About</a>
            </li>
            <li class="hover:underline cursor-pointer">
              <a href="#service" class="block py-2 px-3 rounded-sm text-sm">Services</a>
            </li>
            <li class="hover:underline cursor-pointer">
              <a href="#projects" class="block py-2 px-3 rounded-sm text-sm">Projects</a>
            </li>
            <li class="hover:underline cursor-pointer">
              <a href="#contact" class="block py-2 px-3 rounded-sm text-sm">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- menu options for small devices -->

    <transition name="menu">
      <div
        class="navbar hidden"
        :class="
          theme.darkMode && navbar
            ? ' max-sm:block bg-[#181824] '
            : !theme.darkMode && navbar && 'max-sm:block bg-[#fafafa] '
        "
      >
        <ul
          class="font-medium flex flex-col p-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bord nav-links animate__animated animate__fadeIn animate__delay-1s"
        >
          <li class="px-3 py-2" @click="navbar = !navbar">
            <a href="#" aria-current="page">Home</a>
          </li>
          <li class="px-3 py-2" @click="navbar = !navbar">
            <a href="#about">About</a>
          </li>
          <li class="px-3 py-2" @click="navbar = !navbar">
            <a href="#service">Services</a>
          </li>
          <li class="px-3 py-2" @click="navbar = !navbar">
            <a href="#projects">Projects</a>
          </li>
          <li class="px-3 py-2" @click="navbar = !navbar">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </transition>

    <div v-if="navbar" class="overlay w-full h-full fixed bg-[rgba(0,0,0,0.3)] z-10"></div>

    <!-- button to toggle  -->
    <button
      class="fixed bg-[#7562e0] right-7 bottom-10 z-40 p-2 w-10 h-10 rounded-full flex justify-center text-center items-center"
      @click="toggleTheme"
    >
      <FontAwesomeIcon :icon="faSun" v-if="theme.darkMode" color="white" />
      <FontAwesomeIcon :icon="faMoon" v-else color="white" />
    </button>
  </header>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import useTheme from '@/stores/theme'

// use theme
const theme = useTheme()

const toggleTheme = () => {
  theme.darkMode = !theme.darkMode
}

//  nav menu
const navbar = ref(false)
const handleNavbar = () => {
  navbar.value = !navbar.value
}
</script>

<style>
@media (max-width: 375px) {
  .navbar {
    top: 9%;
  }
}

.menu-enter-active {
  transition: all 0.25s ease;
  transition-delay: 100ms;
}
.menu-leave-active {
  transition: all 0.3s ease;
}

.menu-enter-from {
  transform: translateX(400px);
  opacity: 0;
}

.menu-leave-to {
  opacity: 0.2;
  transform: translateX(400px);
}
</style>