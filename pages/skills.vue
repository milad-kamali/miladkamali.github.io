<template>
  <div>
    <h2 class="text-white text-4xl font-bold">Skills</h2>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-32">
      <div class="pt-10">
        <skill
          v-for="(skill, i) in skills.part1"
          :key="i"
          :title="skill.title"
          :proficiency="skill.proficiency"
        />
      </div>
      <div class="pt-10">
        <skill
          v-for="(skill, i) in skills.part2"
          :key="i"
          :title="skill.title"
          :proficiency="skill.proficiency"
        />
      </div>
      <div class="pt-10">
        <skill
          v-for="(skill, i) in skills.part3"
          :key="i"
          :title="skill.title"
          :proficiency="skill.proficiency"
        />
      </div>
    </div>
  </div>
</template>

<script>
import skill from '../components/skill.vue'

export default {
  components: { skill },
  head () {
    return {
      title: "Milad Kamali - Skills"
    }
  },
  data() {
    return {
      skills: {
        part1: [
          {
            title: "HTML",
            proficiency: 90
          },
          {
            title: "PHP",
            proficiency: 30
          },
          {
            title: "Laravel",
            proficiency: 30
          },
          {
            title: "MySQL",
            proficiency: 50
          },
          {
            title: "Wordpress (Theme Development)",
            proficiency: 60
          }
        ],
        part2: [
          {
            title: "CSS",
            proficiency: 90
          },
          {
            title: "Tailwind",
            proficiency: 90
          },
          {
            title: "Bootstrap",
            proficiency: 90
          }
        ],
        part3: [
          {
            title: "JavaScript",
            proficiency: 80
          },
          {
            title: "Vue",
            proficiency: 90
          },
          {
            title: "Nuxt",
            proficiency: 90
          },
          {
            title: "Vuex",
            proficiency: 90
          },
          {
            title: "Vuetify",
            proficiency: 90
          }
        ]
      }
    }
  }
}
</script>