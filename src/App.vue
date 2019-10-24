<template>
  <div id="app">
    <div class="container-fluid">
      <Nav />
      <router-view/>
      <Footer />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import Nav from '@/components/nav.vue'
import Footer from '@/components/footer.vue'

export default {
  components: { Nav, Footer }
}
</script>
<style lang="scss">
*{margin: 0;
  padding: 0;
  }
@import url('https://fonts.googleapis.com/css?family=Berkshire+Swash');
.container-fluid{padding: 0;}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  background-image: url('./assets/crestkuran.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  background-color: #C4BC95;
  color: #211104;
}
h1, h2, h3, h4, h5, h6 {
  font-family:'Berkshire Swash';
}
// section{
//   background-color: rgba(196,188,149, 0.75);
// }
</style>
