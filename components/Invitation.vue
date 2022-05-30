<template>
    <section class="invitation z-1 bg-color-1" >
        <div class="part-1">
          <v-row>
            <v-col lg="8" md="10" sm="12" xs="12" offset-lg="2" offset-md="1" class="title-invitation">
              <p class="font-4">La fam. López Castro en conjunto con la fam. Chávez López solicitan
                su presencia al <br/> <strong style="text-decoration: underline">matrimonio de sus hijos:</strong></p>
            </v-col>
          </v-row>
          <v-row>
            <v-col col-6 align="center" class="husband-name">David Roberto</v-col>
            <v-col col-6 align="center" class="wife-name">Paola Veronica Nicolle</v-col>
          </v-row>
          <v-row>
            <v-col col-12>
              <p align="center" class="middle-names"> & </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" class="husband-lastname">López Castro</v-col>
            <v-col align="center" class="wife-lastname">Chávez López</v-col>
          </v-row>
        </div>
        <div class="middle-part">
            <v-row justify="center" align="center">
              <v-col lg="8" md="10" sm="12" xs="12">
                <Slider v-if="sliderData" :data="sliderData"/>
              </v-col>
            </v-row>
        </div>
        <div class="part-2" id="detils">
          <v-row>
            <v-col cols="6" justify="center" align="center">
              <div class="anounce">
                <p>THE</p>
                <p>WEDDING</p>
                <p>DAY</p>
              </div>
            </v-col>
            <v-col cols="6" class="wedding-info">
              <h4 class="title-invitation-2" >Ceremonia Religiosa</h4>
              <p>Fecha: Sábado, Ago 06, 2022</p>
              <p>Hora: 03:00 pm</p>
              <p>Lugar: Parroquia La Santa Cruz Col. Tara, San Pedro Sula</p>
              <a href="">View map</a>

              <h4 class="title-invitation-2 mt-4">Ceremonia Civil y Recepcion</h4>
              <p>Fecha: Sábado, Ago 06, 2022</p>
              <p>Hora: 05:00 pm</p>
              <p>Lugar: Salón Las Poinsettias Angelis Garden, Col. Altiplano, SPS</p>
              <a href="">View map</a>
            </v-col>
          </v-row>
        </div>

    </section>
</template>
<script>
import { mapState } from 'vuex'
import Slider from './Slider'
export default {
    name: 'Invitation',
    components: {
        Slider
    },
    computed: {
        ...mapState({
        sliderData: state => state.sliderData,
        })
    },

}
</script>
