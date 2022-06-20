<template>
  <div>
    <Loader v-if="loader"/>
    <SideNav :items="routes"/>
    <Home id="home"/>
    <Invitation id="invitation"/>
    <Registry id="registry"/>
    <BrideSquad v-show="showBrideSquad==='1'"  id="bride-squad"/>
    <GroomSquad v-show="showGroomSquad==='1'" id="grooms-squad"/>
    <Comments v-show="showComments === '1'"/>
    <Locations id="locations"/>
  </div>
</template>
<script>
import Comments from '@/components/comments/Comments'
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
          loader: true,
          showBrideSquad:null,
          showGroomSquad:null,
          showComments:null,
          routes: [
            { title: "Home", hash: "/#home" },
            { title: "Invitación", hash: "/#invitation" },
            { title: "Registro", hash: "/#registry" },
            { title: "Bride Squad", hash: "/#bride-squad" },
            { title: "Grooms Squad", hash: "/#grooms-squad" },
            { title: "Ubicaciones", hash: "/#locations" },
            { title: "Hospedaje", hash: "/lodging" },
            { title: "Beauty & Makeup", hash: "/beauty" },
            { title: "Comentarios", hash: "/comments_wall" },
          ],
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
        'show_comments'
      ]),
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
  watch:{
    show_bride_squad(Promise){
      Promise.then(show => { this.showBrideSquad = show })
    },
    show_groom_squad(Promise){
      Promise.then(show => { this.showGroomSquad = show })
    },
    show_comments(Promise){
      Promise.then(show => { this.showComments = show })
    }
  }

};
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
</style>
