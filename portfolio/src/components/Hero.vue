<template>
  <section class="px-20 max-md:pt-10 max-xl:px-10 max-sm:px-5">
    <div class="pt-48 max-sm:pt-24 flex justify-between max-sm:flex-col">
      <div>
        <h3 class="pb-3 text-2xl max-md:text-xl text-white">Hello, i'm</h3>
        <h1 class="pb-3 text-6xl text-white max-xl:text-5xl max-sm:text-3xl">Godwin M. Kelvin</h1>
        <p class="pb-3 tracking-wide leading-7 pr-72 text-white max-xl:pr-24 max-sm:pr-0">
          I'm a software developer with a creative mind and a problem-solving spirit. I believe in
          writing clean, maintainable code and am committed to delivering high-quality software that
          meets users' needs.
        </p>
        <div class="flex items-center gap-3 mt-5 max-xl:mb-10">
          <a
            href="#about"
            class="flex items-center justify-center gap-2 w-48 h-10 text-white bg-[#7562e0] hover:bg-white hover:text-black rounded max-xl:w-40 max-sm:w-28 max-sm:text-sm transition-all"
          >
            <button>
              <span> About Me </span>
              <FontAwesomeIcon :icon="faUser" size="xs" />
            </button>
          </a>

          <a
            href="https://www.canva.com/design/DAGbiRk1nvI/mWPy6BSbkIRJLduNOcLmJw/view?utm_content=DAGbiRk1nvI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hb384005104"
            target="blank"
            class="flex items-center justify-center gap-2 w-48 h-10 text-white border-2 border-[#7562e0] hover:bg-[#7562e0] rounded max-xl:w-40 max-sm:w-28 max-sm:text-sm transition-all"
          >
            <button>
              <span> Resume </span>

              <FontAwesomeIcon :icon="faEye" size="xs" />
            </button>
          </a>
        </div>
      </div>
      <div>
        <img
          :src="avatar"
          alt="portfolio hero image"
          class="w-full h-3/4 object-cover rounded max-xl:h-full max-md:h-3/4 max-sm:h-80"
        />
      </div>
    </div>
  </section>
  <div class="h-20 bg-[#181824]"></div>
</template>

<script setup>
import avatar from '../assets/images/avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
</script>

<style>
</style>
