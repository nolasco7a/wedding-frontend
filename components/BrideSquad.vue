<template>
   <div class="section-squad">
       <h1 class="font-4 title-bride-squad">{{ title }}</h1>
        <v-row justify="center">
          <div class="carousel-wrapper">
            <client-only>
              <carousel style="margin-bottom: 15px" :paginationEnabled="false" :autoplay="true" :autoplayHoverPause="true" :perPageCustom="[[0, 1],[576, 1], [768, 1], [1024, 2], [1300, 3]]">
                <slide>
                  <CardSquad v-if="frontBrideSquad" :overlay="false" classCard="card-squad"  :imageCard="frontBrideSquad"/>
                </slide>

                <slide v-for="(item, index) in bride_squad" :key="index">
                  <CardSquad :overlay="true" classCard="groom-squad" :name="item.name" :imageCard="item.image"/>
                </slide>
              </carousel>
            </client-only>
          </div>
        </v-row>
   </div>
</template>
<script>
import CardSquad from '@/components/CardSquad'
import { mapState, mapGetters } from 'vuex'
export default {
    components: { CardSquad },
    data() {
      return {
        title: null,
        frontBrideSquad: null,
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
          'title_bride_squad',
          'front_bride_squad'
        ]),
        ...mapState({
        bride_squad: state => state.brideSquad,
        })
    },
  watch:{
    title_bride_squad(Promise){
      Promise.then(title => { this.title = title })
    },
    front_bride_squad(Promise){
      Promise.then(image => { this.frontBrideSquad = image })
    }
  }
}
</script>
