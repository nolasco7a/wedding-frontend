<template>
    <section class="home" v-if="background">
        <img :src="correctUrl(background)" class="bg-image" alt="">
        <div class="home-text">
            <div class="title-1">RESERVA TU DIA</div>
            <div class="title-2">{{bSingleName}}  y {{gSingleName}}</div>
            <div class="title-3">
                {{ eventDay }}
                <br>
                <Rsvp
                    textButton="RSVP"
                    :rounded="true"
                    buttonClass="gradient-1 btn-large"
                    :textInvitation="textInvitation"
                    :renderGifts="showGifts"
                />
            </div>
        </div>
    </section>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import Rsvp from './Rsvp'
export default ({
    name: 'Home',
    data () {
        return {
          background: null,
          gSingleName:null,
          bSingleName:null,
          eventDay:null,
          showGifts: null,
          textInvitation: null,
        }
    },
    components: {
        Rsvp
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
        'background_home',
        'gsingle_name',
        'bsingle_name',
        'event_day',
        "render_gifts",
        "message_invitation"
      ]),
      ...mapState({
        home_data: state => state.homeData,
        settings: state => state.settings,
      })
    },
  watch: {
    background_home(Promise){
      Promise.then(image => { this.background = image })
    },
    gsingle_name(Promise){
      Promise.then(name => { this.gSingleName = name })
    },
    bsingle_name(Promise){
      Promise.then(name => { this.bSingleName = name })
    },
    event_day(Promise){
      Promise.then(day => { this.eventDay = day })
    },
    render_gifts(Response){
      Response.then(show => this.showGifts = show)
    },
    message_invitation(Response){
      Response.then(message => this.textInvitation = message)
    }
  }
})
</script>
