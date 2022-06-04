<template>
    <section class="registry">
        <!-- busca tu numero o correo electronico para confirmar tu invitacion via correo electronico -->
      <v-row>
        <v-col cols="lg-12" align="center">
          <div class="title-1 title-registry">registrate</div>
          <p class="p-registry">{{textResgistration}}</p>
          <!-- modal -->
          <Rsvp
            textButton="RSVP"
            :rounded="true"
            buttonClass="gradient-1 btn-large"
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
    }),
    computed: {
      ...mapGetters([
        'text_registration'
      ]),
      ...mapState({
        giftList: state => state.giftList,
      })
    },
    watch:{
      text_registration(Promise){
        Promise.then(text => { this.textResgistration = text })
      }
    }
  }
</script>
