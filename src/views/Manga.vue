<template>
    <section>
        <div id="manga">
            <h2>Manga</h2>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="vk-tab" data-toggle="tab" 
                    href="#vk" role="tab" aria-controls="vk" 
                    aria-selected="true">Vampire Knight</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="memory-tab" data-toggle="tab" 
                    href="#memory" role="tab" aria-controls="memory" 
                    aria-selected="false">Memories</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="vk" role="tabpanel" 
                aria-labelledby="vk-tab">
                    <InfoVK />
                    <div class="row">
                        <div v-for="numTomo in 19" :key="numTomo" class="col-md-6">
                            <Tomo :ntomo="numTomo" />
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="memory" role="tabpanel" 
                aria-labelledby="memory-tab">Vampire Knight Memories</div>
            </div>  
        </div>
    </section>
</template>
<script>
// @ is an alias to /src
import InfoVK from '@/components/infovk.vue'
import Tomo from '@/components/tomo.vue'
export default {
  components: {  InfoVK,  Tomo }
}
</script>
<style lang="scss" scoped>
section{
    padding: 5rem 0;  
}
ul{border:none;}
ul li{
    background: #211104;
    color: #C4BC95;
    border: none;
    
    a {
      color: #C4BC95;
    }
}
.nav-tabs .nav-link{
   border: none; 
   border-radius:0;
}
.nav-link.active {
    color:  #211104;
    background-color: #C4BC95;
    border:none;
    border-radius:0;
}
.row { margin:0; padding:0;}
.col-md-6{padding:0;}
</style>