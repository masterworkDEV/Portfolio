


<template>
  <section class="mx-auto px-16 pt-10 max-md:pt-10 max-xl:px-7 max-md:px-4" id="projects">
    <h2
      class="self-center text-2xl max-sm:text-xl font-semibold whitespace-nowrap mt-14 mb-5 text-[#7562e0]"
    >
      Featured projects:
    </h2>
    <p :class="theme.darkMode ? 'text-white' : 'text-[#333]'">
      I have worked on many projects over the course of being a Web Developer, here are a few of my
      live, real-world projects
    </p>
    <div
      class="project mt-10 grid grid-cols-3 place-content-center gap-5 max-xl:grid-cols-2 max-sm:grid-cols-1"
    >
      <article
        class="card w-full h-96 rounded-lg p-5 shadow-xl transition-all overflow-y-auto"
        :class="theme.darkMode ? 'bg-[#31313f]' : 'bg-white '"
        v-for="(project, index) in projects"
        :key="project.title"
      >
        <img
          :src="project.imageUrl"
          alt=""
          class="w-full h-2/4 object-cover border opacity-60 rounded-lg border-[#7562e0]"
        />
        <h3
          class="self-center text-xl max-sm:text-[1rem] font-semibold uppercase whitespace-nowrap mt-4 mb-2"
          :class="theme.darkMode ? 'text-white' : 'text-[#333]'"
        >
          {{ project.title }}
        </h3>
        <p
          class="leading-6 max-sm:text-sm transition-all"
          @click="toggleExpand(index)"
          :class="theme.darkMode ? 'text-white' : 'text-[#333]'"
        >
          {{
            !project.expanded
              ? project.description.length < 80
                ? project.description
                : project.description.slice(0, 80).concat('...see more')
              : project.description.length > 80
              ? project.description.concat('...see less')
              : project.description
          }}
        </p>
        <div class="flex justify-between items-center gap-10 mt-5">
          <a
            :href="project.liveUrl"
            target="blank"
            class="w-full h-10 flex text-center justify-center text-white rounded-lg max-sm:text-sm bg-[#7562e0]"
          >
            <button>View Live</button>
          </a>

          <a
            :href="project.githubLink"
            target="blank"
            class="w-full h-10 flex text-center justify-center border rounded-lg max-sm:text-sm border-[#7562e0]"
            :class="theme.darkMode ? '   text-white' : ' text-[#333] '"
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
import useTheme from '@/stores/theme'
import image from '@/assets/images/reliant.jpg'

const theme = useTheme()

const projects = ref([
  {
    title: 'E-Store',
    description:
      'Your destination for the latest trends and timeless classics. Shop now and express your style.( Built with Vue.js for a dynamic user interface, Firebase for backend services, Tailwind CSS for styling, and Animate.css for engaging animations.)',
    imageUrl:
      'https://media-hosting.imagekit.io//d91f4bf2b219444a/Group 84.png?Expires=1836355367&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=haITYPK8R3F45BBncpDUC8gv8vpcXu2ZWOdhc-ZYhcwA-Tcc3YyuesDHlh1lwiXwGrwLWHALKHGx7yrlb5ln29VsJcKL7ipZY7jMTph9eJ0Ack5hxH2eIffAZq0uRrRltHk-21uJ3FvbS3FdUyvBu7wfeaAUg-2EfqzbSHBdWf5P1PosswD6uO7k1rIV--EekrePu8EpvvrL53u~lIdQxukGI8TKU14WRM7lydiC8G26~avcXAK4t~GfVAKppqgrIboOcqCCc8UUpL60xsAyJeUQzSxv90qTf8sMcKw9CLvfgyiDim9qsJiILRT3Gu5amQZvN0EsPOMdphcpsGzJGA__',
    liveUrl: 'https://ecommerce-development-demo-app-123.vercel.app/',
    githubLink: 'apc',
    expanded: false, // Add the expanded property directly here
  },
  {
    title: 'Reliant Route Dispatch',
    description:
      "Reliant Route Dispatch provides freight dispatching services for independent truckers and small fleet owners. The company's goal is to help these clients find and secure profitable loads, manage paperwork, a",
    imageUrl: image,
    liveUrl: 'https://reliantroutedispatch.com',
    githubLink: 'https://github.com/masterworkDEV/ReliantRouteDispatch',
    expanded: false, // Add the expanded property directly here
  },
  {
    title: 'Nola Education',
    description:
      'A comprehensive learning platform that offers a wide range of interactive courses and engaging quizzes to help you master any subject. (This project was built using React.js for a dynamic and interactive learning experience.)',
    imageUrl:
      'https://img.freepik.com/free-photo/mobile-phone-with-white-screen-diary-near-painting-colors-wooden-table_23-2148050728.jpg?t=st=1741746381~exp=1741749981~hmac=1e67de51fbf3e3359bf4b108230436c0def99738f8de8dc3fc9ffefa046592e3&w=1060',
    liveUrl: 'https://learn-with-nola.vercel.app/',
    githubLink: 'https://github.com/masterworkDEV/Learnly-Challenge/tree/main/m-education',
    expanded: false,
  },
  {
    title: 'Blem Beauty Supply',
    description:
      'Your destination for the latest trends and timeless classics, wrist watches, makeups and more. Shop now and express your style.( Built with Vue.js for a dynamic user interface, Firebase for backend services, Tailwind CSS for styling, and Animate.css for engaging animations.)',
    imageUrl:
      'https://www.freepik.com/free-photo/cosmetics-composition-with-serum-bottles_8269793.htm#fromView=search&page=1&position=20&uuid=15f7fec0-c756-482d-aaae-372c21ba7cbd&query=cosmetics',
    liveUrl: 'https://sydney-beauty-supply-rgom.vercel.app/',
    githubLink: 'apc',
    expanded: false,
  },
  {
    title: 'Project 2',
    description: 'Another project description.',
    imageUrl: '../assets/images/e-store.png',
    liveUrl: 'https://project2.example.com',
    githubLink: 'apc',
    expanded: false,
  },
  {
    title: 'Project 2',
    description: 'Another project description.',
    imageUrl: '../assets/images/e-store.png',
    liveUrl: 'https://project2.example.com',
    githubLink: 'apc',
    expanded: false,
  },
])

const toggleExpand = (index) => {
  projects.value[index].expanded = !projects.value[index].expanded
}
</script>

<style>
.card::-webkit-scrollbar {
  display: none;
}
</style>