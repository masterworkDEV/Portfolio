<template>
  <footer class="px-20 pt-24 max-md:pt-10 max-xl:px-10 max-sm:px-5">
    <ul
      class="flex justify-between items-center text-[#bdbdbd7e] max-sm:text-[.7rem] max-sm:flex-wrap"
    >
      <li>@2023 masterworkDEV</li>
      <li>Web Developer</li>
      <li>UI Designer</li>
      <li>SEO Specialist</li>
      <li>Designed by @ernestechie</li>
    </ul>
    <ul class="flex items-center gap-5 mt-5 mb-5">
      <li>
        <a href="">
          <FontAwesomeIcon
            :icon="faInstagram"
            size="xl"
            class="text-[#7562e0] hover:text-white transition"
          />
        </a>
      </li>

      <li>
        <a href="">
          <FontAwesomeIcon
            :icon="faTwitter"
            size="xl"
            class="text-[#7562e0] hover:text-white transition"
          />
        </a>
      </li>
      <li>
        <a href="">
          <FontAwesomeIcon
            :icon="faLinkedinIn"
            size="xl"
            class="text-[#7562e0] hover:text-white transition"
          />
        </a>
      </li>
      <li>
        <a href="">
          <FontAwesomeIcon
            :icon="faMailBulk"
            size="xl"
            class="text-[#7562e0] hover:text-white transition"
          />
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
</script>

<style>
</style>