<template>
  <v-card color="basil" >
    <v-card-title class="text-center justify-center py-6">
      <div class="title-1 title-registry">UBICACIONES</div>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab>
          {{ title }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <div id="map-wrap" style="height: 70vh">
          <no-ssr>
            <l-map :zoom="12" :center="[15.506412340472833, -88.0249337175433]">
              <l-tile-layer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              ></l-tile-layer>
              <l-marker v-for="item in locations" :key="item.id" :lat-lng="getCurrentLatLong(item.lat_long)">
                <l-popup>{{item.name}} <br><a :href="item.google_maps_link" target="_blanck">Abrir en google maps</a></l-popup>
              </l-marker>
            </l-map>
          </no-ssr>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
  export default {
    name: 'MapLocation',
    props:{
      locations:{
        type: Array,
        required: true
      },
      title:{
        type: String,
        default: ''
      }
    },
    methods:{
      getCurrentLatLong(lat_long){
        return lat_long.split(',').map(item => parseFloat(item))
      },
    },
  }
</script>
<style>
/* Helper classes */
.basil {
  background-color: #f7e8e7 !important;
}
</style>
