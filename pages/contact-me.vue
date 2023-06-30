<template>
  <div>
    <h2 class="text-white text-4xl font-bold mb-10">Contact Me</h2>
    <form class="text-center">
      <i class="bx bx-envelope-open text-white text-9xl mb-4" />
      <div class="sm:w-full md:w-4/6 lg:w-2/6 flex flex-col mx-auto font-semibold">
        <label class="text-white text-lg text-left">
          Your Name:
          <input
            v-model="email.name"
            ref="name"
            class="w-full rounded text-black mt-1 px-1.5"
          >
        </label>
        <label class="text-white text-lg text-left my-4">
          Your Email:
          <input
            v-model="email.email"
            ref="email"
            type="email"
            class="w-full rounded text-black mt-1 px-1.5"
          >
        </label>
        <label class="text-white text-lg text-left">
          Your Message:
          <textarea
            v-model="email.message"
            ref="message"
            cols="30"
            rows="5"
            class="w-full rounded text-black mt-1 px-1.5"
          />
        </label>
        <span v-if="success == 'true'" class="text-green-300 mt-2">Message has been sent.</span>
        <span v-else-if="success == 'false'" class="text-red-300 mt-2">Something went wrong, Please try again.</span>
        <button
          type="button"
          class="flex w-full justify-center items-center border-2 border-white hover:bg-white text-lg font-semibold text-white hover:text-primary mx-auto mt-4 px-16 py-2 rounded transition-colors"
          @click="sendEmail"
        >
          <span v-if="!loading">Send</span>
          <i v-else class="bx bx-loader-alt text-xl" :class="loading ? 'animate-spin' : null" />
        </button>
      </div>
    </form>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  head () {
    return {
      title: "Milad Kamali - Contact Me"
    }
  },
  data () {
    return {
      email: {
        name: '',
        email: '',
        message: ''
      },
      loading: false,
      success: ''
    }
  },
  methods: {
    sendEmail () {
      this.success = ''
      // if (!this.loading) {
      //   this.loading = true
      //   axios.post('api/message', { ...this.email } ).then(() => {
      //     this.loading = false
      //     this.email.name = ''
      //     this.email.email = ''
      //     this.email.message = ''
      //     this.success = 'true'
      //   }).catch(err => {
      //     this.loading = false
      //     this.success = 'false'
      //   })
      // }
    }
  }
}
</script>