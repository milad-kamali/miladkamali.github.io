<template>
  <div>
    <img
      src="/images/milad-kamali.jpg"
      alt="Milad Kamali"
      class="w-64 h-64 mx-auto mt-5 rounded-3xl"
    >
    <h1 class="sm:text-4xl md:text-4xl text-center text-white font-bold my-4">Milad Kamali</h1>
    <h2 class="sm:text-2xl md:text-2xl text-center text-white my-2">Web Developer</h2>
    <p class="text-xl text-gray-200 text-justify md:text-center md:mx-16 lg:mx-32 my-4">Interested to web development, Front end developer by Vue js and back end development Laravel also I have experience in C# and Android development.</p>
    <div class="text-center my-16">
      <a
        href="/Milad Kamali - resume.pdf"
        class="border-2 border-white hover:bg-white sm:text-xl font-semibold text-white hover:text-primary mx-auto px-16 py-3 rounded-2xl transition-colors"
        download
      >
        Get My CV
      </a>
    </div>
    <address class="flex text-white text-3xl justify-center">
      <a href="mailto:kamali_milad@outlook.com" class="inline-flex mx-3">
        <i class="bx bx-envelope"></i>
      </a>
      <a href="https://linkedin.com/in/kamali-milad" class="inline-flex mx-3" target="_blank">
        <i class="bx bxl-linkedin"></i>
      </a>
      <a href="https://github.com/milad-kamali" class="inline-flex mx-3" target="_blank">
        <i class="bx bxl-github"></i>
      </a>
    </address>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: "Milad Kamali"
    }
  }
}
</script>
