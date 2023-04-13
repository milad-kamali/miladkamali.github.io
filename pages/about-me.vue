<template>
  <div>
    <h2 class="text-white text-4xl font-bold">About Me</h2>
    <div class="mt-10 text-white text-xl leading-loose">
      <div v-for="(story, i) in stories" :key="i" class="relative flex my-8">
        <div class="flex justify-center">
          <div class="absolute w-3.5 h-3.5 mt-3 rounded-full" :class="i < stories.length - 1 ? 'border-white border-2' : 'bg-white'"></div>
          <div v-if="i < stories.length - 1" class="absolute bg-white w-0.5 h-full mx-auto mt-8"></div>
        </div>
        <p class="ml-7">{{story}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: "Milad Kamali - About Me"
    }
  },
  data() {
    return {
        stories: [
          "On Jan 1996 I was Born",
          "On Sep 2013 I finished my school with Diploma of Computer",
          "On Mar 2015 I started intership in computer service company",
          "On Sep 2015 I finished college with Associate degree of Computer",
          "On Feb 2018 I finished university with Bachelor degree of Software Engineering",
          "On Dec 2019 I finished my military service",
          "On Feb 2020 I started my job position as Front End developer at Royal Vision"
        ]
    }
  }
}
</script>