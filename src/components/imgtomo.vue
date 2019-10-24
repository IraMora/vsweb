<template>
<div v-bind:id="'Tomo'+this.imgnum" data-interval="false" class="carousel slide carousel-fad">
  <div class="carousel-inner">
    <div class="carousel-item active">   
        <h5>Japón</h5>
        <img v-bind:src="require('../assets/tomo/jap/vk'+imgnum+'.png')" class="" alt="tomo 1 Japón">
        <p><b>ISBN</b> 000-000-0000-00-0</p>
    </div>
    <div class="carousel-item">
        <h5>España</h5>
        <img v-bind:src="require('../assets/tomo/esp/vk'+imgnum+'.png')" class="" alt="tomo 1 España">
        <p><b>ISBN</b> 000-000-0000-00-0</p>
    </div>
    <div class="carousel-item">
        <h5>México</h5>
        <img v-bind:src="require('../assets/tomo/mex/vk'+imgnum+'.png')" class="" alt="tomo 1 México.">
        <p><b>ISBN</b> 000-000-0000-00-0</p>
    </div>
    <div class="carousel-item">
        <h5>Argentina</h5>
        <img v-bind:src="require('../assets/tomo/arg/vk'+imgnum+'.png')" class="" alt="tomo 1 Argentina">
        <p><b>ISBN</b> 000-000-0000-00-0</p>
    </div>
  </div>
  <a class="carousel-control-prev" v-bind:href="'#Tomo'+this.imgnum+''" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" v-bind:href="'#Tomo'+this.imgnum+''" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

</template>
<script>
export default {
    props: ['imgnum'],
}
</script>
<style scoped>
img {
  margin:  2rem 0;
    -webkit-filter: sepia(100%);
    -moz-filter: sepia(100%);	
    -ms-filter: sepia(100%);
    -o-filter: sepia(100%);
    filter: sepia(100%);
}
img:hover{
    -webkit-filter: sepia(0%);
    -moz-filter: sepia(0%);	
    -ms-filter: sepia(0%);
    -o-filter: sepia(0%);
    filter: sepia(0%);
}
.carousel-control-next, .carousel-control-prev{
  position: static;
  display:inline-table;
  color: #211104;
}
</style>