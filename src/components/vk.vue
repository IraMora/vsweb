<template>
    <div>
        <h3>Vampire Knight</h3>
    
<Tomo />
        <!-- <InfoVK /> -->

        <!-- <div>
            <span v-for="item in 19" :key="item">
                <img class="img-fluid img-thumbnail"
                v-bind:src="require('../assets/manga/tomo' + item + 'Jap.gif')" v-bind:alt="item">
            </span> 
        </div> -->
    </div>
</template>
<script>
// @ is an alias to /src
import InfoVK from '@/components/infovk.vue'
import Tomo from '@/components/tomo.vue'
export default {
  components: { InfoVK,  Tomo  }
}
</script>
<style>

</style>