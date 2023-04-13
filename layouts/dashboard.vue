<template>
  <div class="absolute grid grid-cols-12 w-full h-full bg-primary sm:mb-20 md:mb-auto">
    <main class="sm:col-span-12 md:col-span-11 flex-col items-center bg-white bg-opacity-20 rounded-md sm:mx-4 md:ml-10 sm:my-4 md:my-10 sm:p-5 md:p-10 md:pb-auto">
      <NuxtPage />
    </main>
    <nav class="fixed sm:col-span-12 md:col-span-1 flex sm:flex-col md:flex-row sm:w-full md:w-1/12 md:h-full sm:right-auto md:right-2 sm:bottom-0 md:bottom-auto sm:bg-primary items-center justify-center">
      <ul class="sm:grid grid-cols-2 sm:w-full md:block text-3xl text-white whitespace-nowrap">
        <li
          class="w-full sm:mx-2 md:mx-auto my-3 px-1 py-4 rounded-2xl"
          :class="($route.path == '/admin/visitors' || $route.path == '/admin/visitors' ? 'bg-white bg-opacity-30 ' : null)"
        >
          <NuxtLink to="/admin/visitors" class="flex flex-col text-center items-center">
            <i class="bx bx-group"></i>
            <span class="block text-sm mt-1">
              Visitors
            </span>
          </NuxtLink>
        </li>
        <li
          class="w-full sm:mx-2 md:mx-auto my-3 px-1 py-4 rounded-2xl"
          :class="($route.path == '/admin/messages' || $route.path == '/admin/messages' ? 'bg-white bg-opacity-30 ' : null)"
        >
          <NuxtLink to="/admin/messages" class="flex flex-col text-center items-center">
            <i class="bx bx-envelope"></i>
            <span class="block text-sm mt-1">
              Messages
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default ({
    head () {
      return {
        meta: [{
          name: 'robots',
          content: 'noindex, follow'
        }]
      }
    }
  })
</script>
