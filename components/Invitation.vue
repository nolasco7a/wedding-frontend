<template>
    <section class="invitation z-1 bg-color-1" >
        <v-row>
            <v-col lg="8" md="10" sm="12" xs="12" offset-lg="2" offset-md="1" class="title-invitation">
                <p>La fam. López Castro en conjunto con la fam. Chávez López solicitan su presencia al matrimonio de sus hijos:</p>
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
        <v-row justify="center" align="center">
            <v-col lg="8" md="10" sm="12" xs="12">
                <Slider :data="sliderData"/>
            </v-col>    
        </v-row>
        <v-row>
            <v-col cols="6" justify="center" align="center">
                <div class="anounce">
                    <p>THE</p>
                    <p>WEDDING</p> 
                    <p>DAY</p>
                </div>
            </v-col>
            <v-col cols="6" class="wedding-info">
                <h4 class="title">Ceremonia Religiosa</h4>
                <p>Fecha: Sábado, Ago 06, 2022</p>
                <p>Hora: 03:00 pm</p>
                <p>Lugar: Parroquia La Santa Cruz Col. Tara, San Pedro Sula</p>
                <a href="">View map</a>

                <h4 style="mt-4" class="title">Ceremonia Civil y Recepcion</h4>
                <p>Fecha: Sábado, Ago 06, 2022</p>
                <p>Hora: 05:00 pm</p>
                <p>Lugar: Salón Las Poinsettias Angelis Garden, Col. Altiplano, SPS</p>
                <a href="">View map</a>
            </v-col>
        </v-row>
      
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