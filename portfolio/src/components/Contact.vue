<template>
  <section class="mx-auto px-20 pt-24 max-md:pt-10 max-xl:px-10 max-sm:px-5" id="contact">
    <div class="flex justify-between items-start max-sm:block">
      <div>
        <h3 class="text-2xl max-sm:text-[1rem] font-semibold text-[#7562e0] dark:text-white">
          Connect with me:
        </h3>
        <p class="text-white">Satisfied with me? Please contact me</p>
        <ul class="flex items-center gap-5 mt-5">
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
      </div>
      <form class="w-2/4 max-sm:w-full max-sm:mt-10 mb-5" @submit.prevent="handleFormSubmission">
        <h4 class="text-xl max-sm:text-[1rem] text-white mb-5">Contact me let's make magic</h4>

        <label for=" username"></label>
        <div class="flex mb-3">
          <span
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"
              />
            </svg>
          </span>
          <input
            type="text"
            name="name"
            id="website-admin"
            class="rounded-none rounded-e-lg bg-[#31313f] text-white block flex-1 min-w-0 w-full text-sm p-2.5 dark:placeholder-gray-400 dark:text-white outline-0"
            placeholder="John Doe..."
            v-model="name"
          />
        </div>
        <small v-if="nameError" class="text-red-600">{{ nameError }}</small>

        <div class="flex mb-3">
          <span
            class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600"
          >
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 16"
            >
              <path
                d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"
              />
              <path
                d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"
              />
            </svg>
          </span>
          <input
            type="text"
            name="email"
            id="website-admin"
            class="rounded-none rounded-e-lg bg-[#31313f] text-white block flex-1 min-w-0 w-full text-sm p-2.5 dark:placeholder-gray-400 dark:text-white outline-0"
            placeholder="Johndoe@gmail.com"
            v-model="email"
          />
        </div>
        <small v-if="emailError" class="text-red-600">{{ emailError }}</small>

        <textarea
          id="message"
          rows="4"
          class="mb-4 block p-2.5 w-full text-sm text-white bg-[#31313f] rounded-lg focus:ring-blue-500 dark:placeholder-gray-400 dark:text-white"
          required
          placeholder="Write your thoughts here..."
          v-model="message"
        >
        </textarea>

        <button
          class="w-1/4 p-2.5 text-white bg-[#7562e0] rounded-lg max-sm:w-full"
          :disabled="!validate"
        >
          Send
        </button>
      </form>
    </div>
    <div v-if="successModal" class="bg-[#181824] p-2 flex justify-center items-center">
      <p class="text-center text-white">Your message was sent successfully</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

const name = ref('')
const email = ref('')
const message = ref('')
const nameError = ref(null)
const emailError = ref(null)
const messageError = ref(null)
const successModal = ref(false)

const validate = () => {
  let isValid = true
  nameError.value = null
  emailError.value = null
  messageError.value = null

  if (!name.value.trim()) {
    nameError.value = 'Name cannot be empty'
    isValid = false
  }

  if (email.value.trim() === '') {
    emailError.value = 'Email cannot be empty'
    isValid = false
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email.value)) {
    emailError.value = 'Invalid email address'
    isValid = false
  }
  return isValid
}

const handleFormSubmission = () => {
  setTimeout(() => {
    if (validate()) {
      console.log(name.value, email.value, message.value)
      name.value = ''
      email.value = ''
      message.value = ''
      successModal.value = true
    }
  }, 2000)

  setTimeout(() => (successModal.value = false), 3000)
}
</script>

<style>
</style>