<template>
  <nav
    class="fixed right-0 left-0 top-0 pt-8 pb-8 max-sm:pt-4 max-sm:pb-4 bg-white border-gray-200 dark:bg-white custom-nav-background"
    :class="initialScroll && 'custom-nav-active'"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between px-20 max-xl:px-10 max-sm:px-7"
    >
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-[#7562e0] dark:text-white"
          >masterworkDEV</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:border-gray-700 nav-links"
        >
          <li>
            <a
              href="#"
              class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-[#7562e0] md:p-0 dark:text-white md:dark:text-[#7562e0]"
              aria-current="page"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#7562e0] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all"
              >About</a
            >
          </li>
          <li>
            <a
              href="#service"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#7562e0] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all"
              >Services</a
            >
          </li>
          <li>
            <a
              href="#projects"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#7562e0] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="block py-2 px-3 text-white rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#7562e0] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent transition-all"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const initialScroll = ref(null)
onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      initialScroll.value = true
    } else {
      initialScroll.value = null
    }
  })
})
</script>

<style>
.custom-nav-background {
  background: #1a1a29;
}
.custom-nav-active {
  background-color: rgba(24, 24, 36, 1);
  box-shadow: 1px 2px 5px rgba(24, 24, 36, 0.407);
}
</style>