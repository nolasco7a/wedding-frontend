<template>
  <div>
    <Loader v-if="loader"/>
    <SideNav :items="routes"/>
    <BeautyHome/>
    <BeautyBody :locations="locations" :message="message"/>
    <MapLocation :locations="locations" title="Beauty & Makeup Sugeridos"/>
  </div>
</template>
<script>
import BeautyHome from '../components/beauty/BeautyHome.vue';
import BeautyBody from '../components/beauty/BeautyBody.vue';
import MapLocation from '../components/locations/MapLocation.vue';
import { mapGetters } from 'vuex';
export default {
    name: "lodging",
    components: { BeautyBody, BeautyHome, MapLocation },
    data() {
        return {
            loader: true,
            locations: null,
            message: null,
            routes: [
            { title: "Home", hash: "/" },
            { title: "Hospedaje", hash: "/lodging" },
            { title: "Comentarios", hash: "/comments_wall" },
          ],
        };
    },
    computed: {
      ...mapGetters([
        'beauties',
        'message_beauty',
      ])
    },
    beforeMount() {
        this.$store.dispatch("getSettings");
        this.$store.dispatch("getSuggestedLocations");
    },
    watch:{
      beauties(Response){
        Response.then(locations => {this.locations = locations})
      },
      message_beauty(Promise){
            Promise.then(message => { this.message = message })
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