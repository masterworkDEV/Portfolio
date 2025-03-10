<template>
  <section class="mx-auto px-20 pt-10 max-md:pt-10 max-xl:px-10 max-md:px-5" id="projects">
    <h2
      class="self-center text-2xl max-sm:text-xl font-semibold whitespace-nowrap text-[#7562e0] dark:text-white mt-14 mb-5"
    >
      Featured projects:
    </h2>
    <p class="text-white">
      I have worked on many projects over the course of being a Web Developer, here are a few of my
      live, real-world projects
    </p>
    <div
      class="mt-10 grid grid-cols-3 place-content-center gap-5 max-xl:grid-cols-2 max-sm:grid-cols-1"
    >
      <article
        class="bg-[#31313f] rounded-lg w-full h-96 p-5 shadow-2xl"
        v-for="project in projects"
        :key="project"
      >
        <img
          :src="project.imageUrl"
          alt=""
          class="w-full h-2/4 object-cover border border-[#7562e0] opacity-60 rounded-lg"
        />
        <h3
          class="self-center text-xl max-sm:text-[1rem] font-semibold uppercase whitespace-nowrap text-[#7562e0] dark:text-white mt-4 mb-2"
        >
          {{ project.title }}
        </h3>
        <p class="text-white leading-6 max-sm:text-sm">
          {{
            project.description.length <= 80
              ? project.description
              : project.description.slice(0, 80) + '...'
          }}
        </p>
        <div class="flex justify-between items-center gap-10 mt-5">
          <a
            :href="project.liveUrl"
            target="blank"
            class="w-full h-10 flex text-center justify-center text-white bg-[#7562e0] rounded-lg max-sm:text-sm"
          >
            <button>View Live</button>
          </a>

          <a
            :href="project.githubLink"
            target="blank"
            class="w-full h-10 flex text-center justify-center text-white border border-[#7562e0] rounded-lg max-sm:text-sm"
          >
            <button>Github Repo</button>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import image from '../assets/images/avatar.jpg'

const projects = ref([
  {
    title: 'E-Store',
    description:
      'Your destination for the latest trends and timeless classics. Shop now and express your style',
    imageUrl: 'src/assets/images/e-store.png',
    liveUrl: 'https://ecommerce-development-demo-app-123.vercel.app/',
    githubLink: 'apc',
  },
  {
    title: 'Nola Education',
    description:
      'A comprehensive learning platform that offers a wide range of interactive courses and engaging quizzes to help you master any subject.',
    imageUrl: '../assets/images/e-store.png',

    liveUrl: 'https://learn-from-nola-6sj9r2wki-masterworkdev1s-projects.vercel.app/',
    githubLink: 'https://github.com/masterworkDEV/Learnly-Challenge/tree/main/m-education',
  },
  {
    title: 'Project 2',
    description: 'Another project description.',
    imageUrl: '../assets/images/e-store.png',
    liveUrl: 'https://project2.example.com',
    githubLink: 'apc',
  },
  {
    title: 'Project 2',
    description: 'Another project description.',
    imageUrl: '../assets/images/e-store.png',
    liveUrl: 'https://project2.example.com',
    githubLink: 'apc',
  },
  {
    title: 'Project 2',
    description: 'Another project description.',
    imageUrl: '../assets/images/e-store.png',
    liveUrl: 'https://project2.example.com',
    githubLink: 'apc',
  },
])
</script>

<style>
</style>