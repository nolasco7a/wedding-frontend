<template>
  <div>
    <Loader v-if="loader"/>
    <SideNav :items="routes"/>
    <LodgingHome/>
    <BodyLodging :locations="locations" :message="messageLodging"/>
    <MapLocation :locations="locations" title="hospedajes sugeridos"/>
  </div>
</template>
<script>
import LodgingHome from '../components/lodging/LodgingHome.vue';
import BodyLodging from '../components/lodging/BodyLodging.vue';
import MapLocation from '../components/locations/MapLocation.vue';
import { mapGetters } from 'vuex';
export default {
    name: "lodging",
    components: { BodyLodging, LodgingHome, MapLocation },
    data() {
        return {
            loader: true,
            locations: null,
            messageLodging: null,
            routes: [
            { title: "Home", hash: "/" },
            { title: "Beauty & Makeup", hash: "/beauty" },
            { title: "Comentarios", hash: "/comments_wall" },
          ],
        };
    },
    computed: {
      ...mapGetters([
        'lodgings',
        'message_lodging',
      ])
    },
    beforeMount() {
        this.$store.dispatch("getSettings");
        this.$store.dispatch("getSuggestedLocations");
    },
    watch:{
      lodgings(Response){
        Response.then(locations => {this.locations = locations})
      },
      message_lodging(Promise){
            Promise.then(message => { this.messageLodging = message })
      },
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => {
                this.loader = false;
                this.$nuxt.$loading.finish();
            }, 1000);
        });
        //init scroll 0
        window.scrollTo(0, 0);
    },
    
}
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
</style>