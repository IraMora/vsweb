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
                aria-labelledby="vk-tab"><VK /></div>
                <div class="tab-pane fade" id="memory" role="tabpanel" 
                aria-labelledby="memory-tab">Vampire Knight Memories</div>
            </div>  
        </div>
    </section>
</template>
<script>
// @ is an alias to /src
import VK from '@/components/vk.vue'

export default {
  components: { VK }
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
</style>