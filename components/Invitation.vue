<template>
    <section class="invitation z-1 bg-color-1" >
        <div class="part-1">
          <v-row>
            <v-col lg="8" md="10" sm="12" xs="12" offset-lg="2" offset-md="1" class="title-invitation">
              <p class="font-4">{{textInvitation}}</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col col-6 align="center" class="husband-name">{{bName}}</v-col>
            <v-col col-6 align="center" class="wife-name">{{gName}}</v-col>
          </v-row>
          <v-row>
            <v-col col-12>
              <p align="center" class="middle-names"> & </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center" class="husband-lastname">{{ bLastname }}</v-col>
            <v-col align="center" class="wife-lastname">{{ gLastname }}</v-col>
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
            <v-col cols="12" lg="6" md="6" sm="12" justify="center" align="center">
              <div class="anounce">
                <p>THE</p>
                <p>WEDDING</p>
                <p>DAY</p>
              </div>
              <div class="anounce-2">THE WEDDING DAY</div>
            </v-col>
            <v-col cols="12" lg="6" md="6" sm="12" class="wedding-info">
              <div v-for="(location, index) in locations" :key="index">
                <h4 class="title-invitation-2" >{{ location.title }}</h4>
                <p>Fecha: {{location.day}}</p>
                <p>Hora: {{ location.hour }}</p>
                <p>Lugar: {{location.place}}</p>
                <a href="#locations">View map</a>
              </div>
            </v-col>
          </v-row>
        </div>

    </section>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import Slider from './Slider'
export default {
    name: 'Invitation',
    data() {
        return{
          gName:null,
          gLastname:null,
          bName: null,
          bLastname: null,
          textInvitation: null
        }
    },
    components: {
        Slider
    },
    computed: {
      ...mapGetters([
        'g_name',
        'b_name',
        'g_lastname',
        'b_lastname',
        'text_invitation'
      ]),
        ...mapState({
          sliderData: state => state.sliderData,
          locations: state => state.locations
        })
    },
  watch: {
    g_name(Promise){
      Promise.then(text => {this.gName = text})
    },
    b_name(Promise){
      Promise.then(text => {this.bName = text})
    },
    g_lastname(Promise){
      Promise.then(text => {this.gLastname = text})
    },
    b_lastname(Promise){
      Promise.then(text => {this.bLastname = text})
    },
    text_invitation(Promise){
      Promise.then(text => {this.textInvitation = text})
    }
  }

}
</script>
