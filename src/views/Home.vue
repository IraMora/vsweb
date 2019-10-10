<template>
  <section class="d-flex flex-column justify-content-center">
    <h2>{{subtitle}}</h2>
    <h1>{{title}}</h1>
    <p>Esperando nuestro despertar desde 2008</p>
  </section>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import Manga from '@/components/manga.vue'

export default {
  // components: { Manga },
  data () {
    return {
      title: 'La Vampire Secta',
      subtitle: 'Vampire Knight'
    }
  }
}

</script>
<style lang="scss" scoped>
  section{
    height: 100vh;
  }
  h1{font-size: 5rem;}
</style>
