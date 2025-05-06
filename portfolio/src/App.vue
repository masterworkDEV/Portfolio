<template>
  <div
    class="app animate__animated animate__fadeIn animate__delay-3s"
    :class="theme.darkMode ? 'dark ' : 'light '"
  >
    <Header />
    <main>
      <Hero />
      <About />
      <Service />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// use theme in the app component
import useTheme from './stores/theme'

// components
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Service from './components/Service.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

// call useTheme()
const theme = useTheme()

// intersection observer
const sections = ref([])
const observer = ref(null)

onMounted(() => {
  sections.value = document.querySelectorAll('section')
  if (observer.value) {
    observer.value.disconnect()
  }
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-observed')
      } else {
        entry.target.classList.remove('section-observed')
      }
    })
  })

  sections.value.forEach((section) => {
    if (section) {
      observer.value.observe(section)
    }
  })
})

onUnmounted(() => {
  if (observer.value) {
    observer.value.disconnect()
    observer.value = null
  }
})
</script>

<style >
html {
  scroll-behavior: smooth;
  font-family: 'Ubuntu Sans', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
#app {
  display: flex;
  flex-grow: 1;
  min-height: 100vh;
  width: 100%;
}

.app.dark {
  background: #1a1a29;
  color: #fff;
}

.app.light {
  background: #fafafa;
  color: #333;
}
section {
  transform: translateY(50px);
  opacity: 0;
  transition: 0.7s ease;
}
.section-observed {
  opacity: 1;
  transform: translateY(0px);
}
</style>
