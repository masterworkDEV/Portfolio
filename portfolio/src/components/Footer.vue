<template>
  <footer class="px-16 pt-24 max-md:pt-10 max-xl:px-10 max-sm:px-4">
    <ul
      class="flex justify-between items-center max-sm:text-[.7rem] max-sm:flex-wrap"
      :class="theme.darkMode ? 'text-[#bdbdbd7e]' : 'text-[#333]'"
    >
      <li>@2023 masterworkDEV</li>
      <li>Web Developer</li>
      <li>UI Designer</li>
      <li>SEO Specialist</li>
      <li>Designed by @ernestechie</li>
    </ul>
    <ul class="flex items-center gap-5 mt-5 mb-5">
      <li>
        <a href="https://www.instagram.com/masterworkdev/" target="_blank">
          <FontAwesomeIcon
            :icon="faInstagram"
            size="xl"
            class="hover:text-white transition"
            color="#7562e0"
          />
        </a>
      </li>

      <li>
        <a href="https://x.com/MasterworkDEV" target="_blank">
          <FontAwesomeIcon
            :icon="faTwitter"
            size="xl"
            class="hover:text-white transition"
            color="#7562e0"
          />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/kelvin-godwin-793062346/" target="_blank">
          <FontAwesomeIcon
            :icon="faLinkedinIn"
            size="xl"
            class="hover:text-white transition"
            color="#7562e0"
          />
        </a>
      </li>
      <li>
        <a
          href="mailto:godwinkelvin025@gmail.com?subject=Information Enquiry &body=Hi masterworkDEV i'd like discuss a project with you"
        >
          <FontAwesomeIcon
            :icon="faMailBulk"
            size="xl"
            class="hover:text-white transition"
            color="#7562e0"
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
import useTheme from '@/stores/theme'

const theme = useTheme()
</script>

<style>
</style>