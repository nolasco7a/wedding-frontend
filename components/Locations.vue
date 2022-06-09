<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <div class="title-1 title-registry">UBICACIONES</div>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="location in locations"
        :key="location.id"
      >
        {{ location.title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="location in locations"
        :key="location.title"
      >
        <div id="map-wrap" style="height: 70vh">
          <no-ssr>
            <l-map :zoom="16" :center="getLocations(location.la, location.long)">
              <l-tile-layer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              ></l-tile-layer>
              <l-marker :lat-lng="getLocations(location.la, location.long)">
                <l-popup>{{location.place}} <br><a :href="location.google_maps_link" target="_blanck">Abrir en google maps</a></l-popup>
              </l-marker>
            </l-map>
          </no-ssr>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import { mapState } from 'vuex';
  export default {
      name: 'Locations',
    data () {
      return {
        tab: null,
        items: [
          {
            name:'Ceremonia Religiosa',
            positionMarker: [15.545533498146867, -88.01444540193137],
            textMarker: 'Parroquia La Santa Cruz Col. Tara, San Pedro Sula',
            googleMap: 'https://goo.gl/maps/AJvjidPZN94TujdQ6'
          },
          {
            name: 'Ceremonia Civil',
            positionMarker:[15.4843401382507, -88.04344793087607],
            textMarker: 'Salón Las Poinsettias Angelis Garden, Col. Altiplano, San Pedro Sula',
            googleMap: 'https://goo.gl/maps/tdyNsJiTks8MVEwR9'
          }
          ,
        ],
      }
    },
    methods: {
      getLocations(lat, long) {
        return( [parseFloat(lat), parseFloat(long)]);
      },
    },
    computed: {
      ...mapState({
        locations: state => state.locations,
      }),
    },
  }
</script>
<style>
/* Helper classes */
.basil {
  background-color: #f7e8e7 !important;
}
</style>
