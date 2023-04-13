<template>
  <div>
    <h2 class="text-white text-4xl font-bold mb-10">Messages</h2>
    <div class="flex flex-col">
      <div
        v-for="(message, i) in messages"
        :key="message.id"
        class="relative bg-white bg-opacity-90 rounded p-3"
      >
        <div class="text-lg font-semibold -mt-2">
          {{ message.name }}
        </div>
        <div>
          <a :href="message.email">
            {{ message.email }}
          </a>
        </div>
        <p>
          {{ message.message }}
        </p>
        <i
          class="bx bx-trash absolute right-1 top-1 text-lg cursor-pointer"
          @click="confirmDelete(message.id, i)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

definePageMeta({
  layout: 'dashboard'
})
export default {
  head () {
    return {
      title: 'Messages'
    }
  },
  data () {
    return {
      messages: []
    }
  },
  created () {
    this.getMessages()
  },
  methods: {
    getMessages () {
      axios.get('api/messages')
        .then((res) => this.messages = res.data)
    },
    confirmDelete (id, index) {
      if (confirm("Are you sure?")) {
        axios.delete('api/message', { params: { id: id } })
        this.messages.splice(index, 1)
      }
    }
  }
}
</script>