<template>
  <div class="grid grid-cols-12 bg-primary sm:mb-20 md:mb-auto">
    <main class="sm:col-span-12 md:col-span-11 flex-col items-center bg-white bg-opacity-20 rounded-md sm:mx-4 md:ml-10 sm:my-4 md:my-10 sm:p-5 md:p-10 md:pb-auto">
      <NuxtPage />
    </main>
    <nav class="fixed sm:col-span-12 md:col-span-1 flex sm:flex-col md:flex-row sm:w-full md:w-auto md:h-full sm:right-auto md:right-2 lg:right-7 sm:bottom-0 md:bottom-auto sm:bg-primary items-center justify-center">
      <ul class="sm:grid grid-cols-5 sm:w-full md:block text-3xl text-white whitespace-nowrap">
        <li
          v-for="item in menuItems"
          :key="item.link"
          class="sm:mx-2 md:mx-auto my-3 px-1 py-2 rounded-2xl"
          :class="($route.path == '/' + item.link || $route.path == item.link ? 'bg-white bg-opacity-30 ' + item.class : item.class)"
        >
          <NuxtLink :to="item.link" class="flex flex-col text-center items-center">
            <i class="bx" :class="'bx-' + item.icon"></i>
            <span class="block text-sm mt-1">
              {{ item.title }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {
          icon: 'home',
          link: '/',
          title: 'Home',
          class: 'sm:order-3 md:order-1'
        },
        {
          icon: 'user',
          link: 'about-me',
          title: 'About Me',
          class: 'sm:order-1 md:order-2'
        },
        {
          icon: 'wrench',
          link: 'skills',
          title: 'Skills',
          class: 'sm:order-2 md:order-3'
        },
        {
          icon: 'briefcase',
          link: 'portfolio',
          title: 'Portfolio',
          class: 'sm:order-4 md:order-4'
        },
        {
          icon: 'envelope-open',
          link: 'contact-me',
          title: 'Contact Me',
          class: 'sm:order-5 md:order-5'
        }
      ],
      // showMobileMenu: true
    }
  },
  // methods: {
  //   toggleMobileMenu () {
  //     if (this.showMobileMenu) {
  //       this.showMobileMenu = !this.showMobileMenu
  //       document.getElementById('mobileMenu').classList.add('w-52')
  //     } else {
  //       document.getElementById('mobileMenu').classList.remove('w-52')
  //       this.showMobileMenu = !this.showMobileMenu
  //     }
  //   }
  // }
}
</script>

<style scoped>
  .menuShadow {
    box-shadow: -2px 0px 15px 0px black;
  }
</style>
