<template>
  <div>
    <h2 class="text-white text-4xl font-bold mb-10">Visitors</h2>
    <div class="flex flex-col">
      <div class="flex text-white font-bold gap-x-2 px-4 py-2">
        <button
          type="button"
          class="bg-white p-2 rounded"
          :class="duration == 'today' ? 'bg-opacity-30' : 'bg-opacity-20'"
          @click="setWeek('today')"
        >
          Today
        </button>
        <button
          type="button"
          class="bg-white p-2 rounded"
          :class="duration == 'week' ? 'bg-opacity-30' : 'bg-opacity-20'"
          @click="setWeek('week')"
        >
          This Week
        </button>
        <button
          type="button"
          class="bg-white p-2 rounded"
          :class="duration == 'month' ? 'bg-opacity-30' : 'bg-opacity-20'"
          @click="setWeek('month')"
        >
          This Month
        </button>
      </div>
      <div class="overflow-x-auto">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 rounded-sm">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Country
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    IP
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    City
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Page
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="(visitor, i) in visitors.data" :key="i">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10 mr-3">
                        <img class="h-10 w-10 rounded-full" :src="'https://cdn.ipwhois.io/flags/'+ visitor.country_code.toLowerCase() +'.svg'" alt="" />
                      </div>
                      {{ visitor.country }}
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ visitor.ip }}
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{ visitor.city }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a :href="'/' + visitor.page" class="text-indigo-600 hover:text-indigo-900">{{ visitor.page }}</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <!-- Pagination -->
      <div class="px-4 py-3 flex items-center justify-between border-t sm:px-6">
        <div class="flex-1 flex justify-between sm:hidden">
          <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Previous
          </a>
          <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Next
          </a>
        </div>
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div>
            <p class="text-sm text-white">
              Showing
              {{ ' ' }}
              <span class="font-medium">{{ visitors.from }}</span>
              {{ ' ' }}
              to
              {{ ' ' }}
              <span class="font-medium">{{ visitors.to }}</span>
              {{ ' ' }}
              of
              {{ ' ' }}
              <span class="font-medium">{{ visitors.total }}</span>
              {{ ' ' }}
              results
            </p>
          </div>
          <div>
            <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <div
                class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
                @click="getVisitors(visitors.previous_page_url)"
              >
                <i class="bx bx-chevron-left text-xl mr-1" aria-hidden="true" />
                <span class="sr-only">Previous</span>
              </div>
              <div
                class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 cursor-pointer"
                @click="getVisitors(visitors.next_page_url)"
              >
                <span class="sr-only">Next</span>
                <i class="bx bx-chevron-right text-xl ml-1" aria-hidden="true" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
definePageMeta({
  layout: 'dashboard'
})
export default {
  head () {
    return {
      title: 'Visitors'
    }
  },
  data () {
    return {
      duration: 'today',
      visitors: {}
    }
  },
  created () {
    // this.getVisitors()
  },
  methods: {
    getVisitors (page) {
      // if (page) {
      //   axios.get(page, { params: { duration: this.duration }}).then(res => this.visitors = res.data)
      // } else {
      //   axios.get('http://localhost:8000/api/visitors',
      //     {
      //       params: {
      //         duration: this.duration
      //       }
      //     })
      //     .then((res) => this.visitors = res.data)
      // }
    },
    setWeek (duration) {
      this.duration = duration
      this.getVisitors()
    }
  }
}
</script>