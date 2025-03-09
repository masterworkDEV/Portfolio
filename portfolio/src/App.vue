<template>
  <div class="app">
    <header>
      <Header />
    </header>
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
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Service from './components/Service.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<style >
html {
  scroll-behavior: smooth;
  font-family: 'Ubuntu Sans', sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
#app {
  background: #1a1a29;
  display: flex;
  flex-grow: 1;
  min-height: 100vh;
  width: 100%;
}
</style>
