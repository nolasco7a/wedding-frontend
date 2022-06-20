<template>
    <section class="registry">
        <!-- busca tu numero o correo electronico para confirmar tu invitacion via correo electronico -->
      <v-row>
        <v-col cols="lg-12" align="center">
          <div class="title-1 title-registry">regístrate</div>
          <p class="p-registry">{{textResgistration}}</p>
          <!-- modal -->
          <Rsvp
            textButton="RSVP"
            :rounded="true"
            buttonClass="gradient-1 btn-large"
            :textInvitation="textInvitation"
            :renderGifts="showGifts"
          />
        </v-col>
      </v-row>



    </section>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
  export default {
    name: 'Registry',
    data: () => ({
      sheet: false,
      textResgistration: null,
      showGifts: null,
      textInvitation: null,
    }),
    computed: {
      ...mapGetters([
        'text_registration',
        "render_gifts",
        "message_invitation"
      ]),
      ...mapState({
        giftList: state => state.giftList,
      })
    },
    watch:{
      text_registration(Promise){
        Promise.then(text => { this.textResgistration = text })
      },
      render_gifts(Response){
        Response.then(show => this.showGifts = show)
      },
      message_invitation(Response){
        Response.then(message => this.textInvitation = message)
      }
    }
  }
</script>
