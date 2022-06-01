<template>
  <div>
    <Loader v-if="loader"/>
    <SideNav />
    <Home id="home"/>
    <Invitation id="invitation"/>
    <Registry id="registry"/>
    <BrideSquad id="bride-squad"/>
    <GroomSquad id="grooms-squad"/>
    <Locations id="locations"/>
    <!-- 
      
      Grooms Squad
      Suggest
     -->
  </div>
</template>
<script>
import BrideSquad from '../components/BrideSquad.vue';
export default {
    data() {
        return {
            loader: true,
        };
    },
    beforeMount() {
        this.$store.dispatch("getHomeData");
        this.$store.dispatch("getSliderData");
        this.$store.dispatch("getGifts");
        this.$store.dispatch("getBrideSquad");
        this.$store.dispatch("getGroomSquad");
    },
    mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => {
                this.loader = false;
                this.$nuxt.$loading.finish();
            }, 3000);
        });
    },
    components: { BrideSquad }
};
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
</style>
