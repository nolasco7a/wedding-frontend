<template>
    <section class="home">
        <img :src="correctUrl(background)" class="bg-image" alt="">
        <div class="home-text">
            <div class="title-1">
              <h1 class="title-background">HOSPEDAJE</h1>
            </div>
        </div>
    </section>
</template>
<script>
import {  mapGetters } from 'vuex'
export default ({
  name:"LodgingHome",
    data () {
        return {
          background: null,
        }
    },
    methods: {
        correctUrl(url) {
            if (url) {
                return `${process.env.imageURL}${url}`
            }
        }
    },
    computed: {
      ...mapGetters([
        'background_lodging',
      ]),
    },
  watch: {
    background_lodging(Promise){
      Promise.then(image => { this.background = image })
    },
  }
})
</script>
<style lang="scss">
  .title-background{
    color: currentcolor !important;
    filter: invert(1) !important;
    background-color: cornsilk;
  }
</style>