<template >
  <section class="px-20 pt-10 max-md:pt-10 max-xl:px-10 max-sm:px-5" id="about">
    <h2
      class="self-center text-2xl max-sm:text-xl font-semibold whitespace-nowrap text-[#7562e0] dark:text-white"
    >
      About Me
    </h2>
    <p class="mt-2 tracking-wide leading-7 text-white max-sm:text-sm">
      I'm a passionate frontend developer with a keen eye for detail and a love for creating
      engaging user experiences. I specialize in
      <b>React.JS, Vue.JS, Node.JS,MongoDB, </b>. My goal is to build clean, efficient, and
      user-friendly interfaces that solve real problems.
    </p>
    <span class="mt-5 flex items-center gap-5">
      <h1 class="text-[#7562e0] text-6xl flex items-center max-sm:text-5xl"><b>2+</b></h1>
      <p class="text-xl text-white max-sm:text-[1rem]">
        Years of experience. Specialised in building apps, while ensuring a seamless web experience
        <br />
        for end users.
      </p>
    </span>
    <div class="mt-10 grid grid-cols-4 place-content-center gap-10 max-xl:gap-4 max-sm:gap-2">
      <div
        class="stack bg-[#bdbdbd] w-full h-52 max-sm:h-30 flex justify-end flex-col text-start items-start"
        v-for="service of myService.slice(0, 4)"
        :key="service"
      >
        <div class="max-sm:text-[.7rem]">
          <FontAwesomeIcon
            :icon="service.icon"
            size="3x"
            class="text-white ml-8 max-xl:ml-4 max-sm:ml-2"
          />
        </div>
        <h4
          class="flex items-end mt-3 mb-5 uppercase text-xl max-xl:text-[1rem] max-sm:text-[.6rem] text-white ml-8 max-xl:ml-4 max-sm:ml-2"
        >
          {{ service.name }} <br />

          {{ service.title }}
        </h4>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import { faMobileAndroid } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-regular-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faNpm } from '@fortawesome/free-brands-svg-icons'

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

<style scoped>
.stack:first-child {
  background: #7562e0;
}
</style>