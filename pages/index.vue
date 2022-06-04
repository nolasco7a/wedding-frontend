<template>
  <div>
    <Loader v-if="loader"/>
    <SideNav />
    <Home id="home"/>
    <Invitation id="invitation"/>
    <Registry id="registry"/>
    <BrideSquad v-show="showBrideSquad==='1'"  id="bride-squad"/>
    <GroomSquad v-show="showGroomSquad==='1'" id="grooms-squad"/>
    <Locations id="locations"/>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
          loader: true,
          showBrideSquad:null,
          showGroomSquad:null,
        };
    },
    beforeMount() {
        this.$store.dispatch("getHomeData");
        this.$store.dispatch("getSliderData");
        this.$store.dispatch("getGifts");
        this.$store.dispatch("getBrideSquad");
        this.$store.dispatch("getGroomSquad");
        this.$store.dispatch("getLocations");
        this.$store.dispatch("getSettings");
    },
    computed: {
      ...mapGetters([
        'show_bride_squad',
        'show_groom_squad',
      ]),
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => {
                this.loader = false;
                this.$nuxt.$loading.finish();
            }, 3000);
        });
        //init scroll 0
        window.scrollTo(0, 0);
    },
  watch:{
    show_bride_squad(Promise){
      Promise.then(show => { this.showBrideSquad = show })
    },
    show_groom_squad(Promise){
      Promise.then(show => { this.showGroomSquad = show })
    },
  }

};
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
</style>
