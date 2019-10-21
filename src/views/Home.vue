<template>
  <section class="d-flex flex-column justify-content-center">
    <h2>{{home.subtitle}}</h2>
    <h1>{{home.title}}</h1>
    <p>{{home.subtitle2}}</p>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Manga from '@/components/manga.vue'

export default {

  computed: {
    home(){
      return this.$store.getters['Default/get_home'];
    }
  },


}

</script>
<style lang="scss" scoped>
  section{
    height: 100vh;
  }
  h1{font-size: 5rem;}
</style>
