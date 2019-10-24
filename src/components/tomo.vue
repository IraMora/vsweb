<template>
    <div>
        <div><h4>Tomo {{ntomo}}</h4></div>
        <div class="row">
            <div class="col-md-8">
                <h5>Argumento</h5>
                <p>Argumento</p>
            </div>
            <div class="col-md-4">
                <ImgTomo :imgnum="ntomo" />
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src

import ImgTomo from '@/components/imgtomo.vue'

export default {
    components: {  ImgTomo  },
    props: ['ntomo'],
}
</script>
<style  scoped>
    .row { margin:0; padding:0;}
    .col-md-4,.col-md-8{padding:0;}

</style>