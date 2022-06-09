<template>
    <div class="section-squad">
        <h1 class="font-3 title-groom-squad">{{title}}</h1>
        <v-row justify="center">
          <div class="carousel-wrapper">
            <client-only>
              <carousel style="margin-bottom: 15px" :autoplay="true" :autoplayHoverPause="true" :perPageCustom="[[0, 1],[576, 1], [768, 1], [900, 2], [1024, 3], [1300, 4]]">
                <slide>
                  <CardSquad v-if="frontGroomSquad" :overlay="false" classCard="card-squad"  :imageCard="frontGroomSquad"/>
                </slide>

                <slide v-for="(item, index) in groom_squad" :key="index">
                  <CardSquad :overlay="true" classCard="groom-squad" :name="item.name" :description="item.description" :imageCard="item.image"/>
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
export default{
    components: { CardSquad },
  data() {
    return {
      title: null,
      frontGroomSquad: null,
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
        'title_groom_squad',
        'front_groom_squad'
      ]),
    ...mapState({
      groom_squad: state => state.groomSquad,
    })
  },
  watch:{
    title_groom_squad(Promise){
      Promise.then(title => { this.title = title })
    },
    front_groom_squad(Promise){
      Promise.then(image => { this.frontGroomSquad = image })
    }
  }
}
</script>
