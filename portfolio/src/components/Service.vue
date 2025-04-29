<template>
  <section class="px-20 pt-10 max-md:pt-10 max-xl:px-10 max-md:px-5" id="service">
    <h2
      class="self-center text-2xl max-sm:text-xl font-semibold whitespace-nowrap text-[#7562e0] dark:text-white mt-14 mb-5"
    >
      The services i offer
    </h2>
    <div class="grid grid-cols-3 place-content-center gap-5 max-sm:grid-cols-2">
      <article
        class="stack border-2 border-white rounded-2xl w-full h-72 max-sm:max-h-40 flex justify-center flex-col items-center p-3 overflow-auto"
        v-for="service of myService"
        :key="service"
      >
        <div class="max-sm:text-[.7rem]">
          <FontAwesomeIcon :icon="service.icon" size="3x" class="text-white" />
        </div>
        <h4
          class="title mb-5 mt-3 max-sm:mt-1 max-sm:mb-2 uppercase text-xl max-sm:text-sm text-white text-center"
        >
          {{ service.name }}

          {{ service.title }}
        </h4>
        <p class="text-center text-white max-sm:text-sm">
          {{
            service.description.length <= 50
              ? service.description
              : service.description.slice(0, 50) + '...'
          }}
        </p>
      </article>
    </div>
  </section>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import { faMobileAndroid } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faNpm } from '@fortawesome/free-brands-svg-icons'
import { ref, onMounted, onUnmounted } from 'vue'
import useIntersectionObserverStore from '@/stores/intersection-observer'

const myService = ref([
  {
    name: 'UI & UX ',
    title: 'Designing',
    icon: faFigma,
    description: 'I design beautiful web interfaces with Figma and Adove XD',
  },
  {
    name: 'Web',
    title: 'development',
    icon: faHtml5,
    description:
      'I create simple interfaces with simple HTML, CSS, Javascript and also other frame works like React and Vue',
  },
  {
    name: 'Mobile ',
    title: 'development',
    icon: faMobileAndroid,
    description: 'i am an expert in mobile development, I have experience using React Native',
  },
  {
    name: 'Seo',
    title: 'Optimization',
    icon: faChartBar,
    description: 'I Optimize Web for SEO and content visibility',
  },
  {
    name: 'Version',

    title: 'Control',
    icon: faGithub,
    description: 'I can use version control system well, Git and Mecurial are my go-to tool ',
  },
  {
    name: 'NPM and',
    title: 'NodeJs',
    icon: faNpm,
    description:
      'I have core understanding of using NPM. i can also develop general purpose application using NodeJs',
  },
])
</script>

<style >
cd .stack:nth-last-child(2) {
  border: #7562e0 2px solid;
}
.stack:nth-last-child(4) {
  border: #7562e0 2px solid;
}
.stack:nth-last-child(6) {
  border: #7562e0 2px solid;
}

.stack::-webkit-scrollbar {
  display: none;
}
</style>