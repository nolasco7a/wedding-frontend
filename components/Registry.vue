<template>
    <section class="registry">
        <!-- busca tu numero o correo electronico para confirmar tu invitacion via correo electronico -->
      <v-row>
        <v-col cols="lg-12" align="center">
          <div class="title-1 title-registry">registrate</div>
          <p class="p-registry">Acompañanos en este gran momento, si aun no te has registrado, a continuacion encontraras un botton para que puedas hacer tu registro y confrimación a la fiesta, gracias a la verga.</p>
          <!-- modal -->
          <Rsvp
            :textButton="REGISTRATE"
            :rounded="true"
            buttonClass="gradient-1 btn-large"
          />
        </v-col>
      </v-row>



    </section>
</template>
<script>
import { mapState } from 'vuex'
  export default {
    name: 'Registry',
    data: () => ({
      sheet: false,
    }),
    computed: {
      ...mapState({
        giftList: state => state.giftList,
      })
    },
  }
</script>
