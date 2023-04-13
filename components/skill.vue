<template>
  <div class="relative text-white mb-16">
    <h6 class="text-2xl font-bold">
      {{ title }}
    </h6>
    <span class="block text-right font-bold">{{ proficiencyValue }}%</span>
    <div class="absolute flex items-center w-full h-3 bg-white rounded-full">
      <div id="progress" class="absolute bg-gray-400 h-1.5 mx-1 rounded-full transition-all duration-1000 w-0" :class="'w-' + maxProficiencyValue"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: [ "title", "proficiency" ],
  data() {
    return {
      proficiencyValue: 0,
      maxProficiencyValue: 0
    }
  },
  mounted() {
    this.setProficiency()
  },
  methods: {
    setProficiency() {
      setInterval(() => {
        if(this.proficiencyValue < this.proficiency){
          this.proficiencyValue++
        }
      }, 10);
      setTimeout(() => {
        this.maxProficiencyValue = this.proficiency
      }, 10)
    }
  }
}
</script>

<style scoped>
  .w-90 {
    width: 90%;
  }
  .w-80 {
    width: 80%;
  }
  .w-70 {
    width: 70%;
  }
  .w-60 {
    width: 60%;
  }
  .w-50 {
    width: 50%;
  }
  .w-30 {
    width: 30%;
  }
</style>