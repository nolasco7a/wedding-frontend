<template>
    <div class="section-squad">
        <h1 class="font-3 title-groom-squad">{{title}}</h1>

          <div class="carousel-wrapper">
            <Hooper ref="carousel" :settings="hooperSettings" style="min-height: 450px;">
                <slide>
                  <CardSquad v-if="frontGroomSquad" :overlay="false" classCard="card-squad"  :imageCard="frontGroomSquad"/>
                </slide>

                <slide v-for="(item, index) in groom_squad" :key="index" style="display:flex; justify-content:center">
                  <CardSquad :overlay="true" classCard="groom-squad" :name="item.name" :description="item.description" :imageCard="item.image"/>
                </slide>
               <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </Hooper>
          </div>
    
    </div>
</template>
<script>
import { Slide, Hooper, Pagination as HooperPagination } from 'hooper'
import CardSquad from '@/components/CardSquad'
import { mapState, mapGetters } from 'vuex'
export default{
    components: { CardSquad, Slide, Hooper, HooperPagination},
  data() {
    return {
      title: null,
      frontGroomSquad: null,
      hooperSettings: {
        itemsToShow: 1,
        breakpoints: {
            0: {
              itemsToShow: 1,
            },
            600: {
              itemsToShow: 2,
            },
            992: {
              itemsToShow: 3,
            },
            1200: {
              itemsToShow: 3,
            },
            1400: {
              itemsToShow: 4,
            },
            
          }
        }
    }
  },
  methods: {
    correctUrl(url) {
      if (url) {
        return `${process.env.imageURL}${url}`
      }
    },
     restartcarousel(){
        this.$refs.carousel.restart()
        
      },
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
  mounted(){
      setTimeout(() => {
        this.restartcarousel()
      }, 500)
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
