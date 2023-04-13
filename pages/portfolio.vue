<template>
  <div>
    <h2 class="text-white text-4xl font-bold mb-10">Portfolio</h2>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-16 text-white">
      <div
        v-for="(portfolio, i) in portfolios"
        :key="i"
        :ref="'portfolio-'+i"
        class="text-lg py-1 border-white border-l-0 opacity-0 transition-all duration-300 borderAnim"
      >
        <h3
          :ref="'title-'+i"
          class="text-2xl font-bold opacity-0 mx-0 transition-transform duration-300"
        >
          {{ portfolio.title }}
        </h3>
        <p
          :ref="'des-' + i"
          class="my-2 opacity-0 transition-transform duration-300"
        >
          {{ portfolio.description }}
        </p>
        <div
          :ref="'technologies-' + i"
          class="opacity-0 transition-transform duration-300"
        >
          <span>Technologies: </span>
          <span
            v-for="(technology, j) in portfolio.technologies"
            :key="j"
            class="font-bold"
          >
            {{ technology + (j <  portfolio.technologies.length - 1 ? ', ' : '') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: "Milad Kamali - Portfolio"
    }
  },
  data() {
    return {
      portfolios: [
        {
          title: 'HOSCO Process Management System',
          description: 'Front end developer of Hormozgan Steel Company (HOSCO) Process Management System at Royal Vision company.',
          technologies: ['Vue', 'Nuxt', 'Vuetify']
        },
        {
          title: 'MBCRM',
          description: 'Full stack developer of Mortgage Broker CRM at Royal Vision company.',
          technologies: ['Vue', 'Laravel', 'Bootstrap']
        },
        {
          title: 'Game Netty',
          description: 'Front end developer of network game hosting solution startup at Royal Vision company.',
          technologies: ['Vue', 'Nuxt', 'Tailwind']
        },
        {
          title: 'Data Management',
          description: 'Implementation of data management software for The disabled community of Hormozgan province.',
          technologies: ['C#', 'SQL Server']
        },
        {
          title: 'Wordpress Theme Development',
          description: 'Design and develop wordpress theme of english teaching website.',
          technologies: ['Wordpress', 'Bootstrap']
        }
      ]
    }
  },
  mounted() {
    this.addAnimations()
  },
  methods: {
    addAnimations() {
      setTimeout(() => {
        for(let i = 0; i < this.portfolios.length; i++){
          this.$refs['portfolio-'+ i][0].classList.remove('border-l-0')
          this.$refs['portfolio-'+ i][0].classList.add('opacity-100', 'border-l-4')
        }
      }, 200);
      setTimeout(() => {
        for(let i = 0; i < this.portfolios.length; i++){
          this.$refs['title-'+ i][0].classList.remove('mx-0')
          this.$refs['title-'+ i][0].classList.add('opacity-100', 'mx-3')
        }
      }, 250);
      setTimeout(() => {
        for(let i = 0; i < this.portfolios.length; i++){
          this.$refs['des-'+ i][0].classList.add('opacity-100', 'mx-3')
        }
      }, 300);
      setTimeout(() => {
        for(let i = 0; i < this.portfolios.length; i++){
          this.$refs['technologies-'+ i][0].classList.add('opacity-100', 'mx-3')
        }
      }, 350);
    }
  }
}
</script>

<style>
  .borderAnim{
    transition: border-left 300ms ease;
  }
</style>