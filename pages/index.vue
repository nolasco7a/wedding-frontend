<template>
  <div>
    <Loader v-if="loader"/>
    <SideNav />
    <Home/>
    <Invitation/>
    <Registry />
    <Locations />
    <!-- 
      Bride Squad
      Grooms Squad
      Suggest
     -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Loader from "@/components/Loader";
import SideNav from "@/components/SideNav.vue";
import Home from "@/components/Home.vue";
import Invitation from "@/components/Invitation";
import Registry from "@/components/Registry";
import Locations from "@/components/Locations";
import { runInThisContext } from 'vm';
export default {
  components: {
    Loader,
    SideNav,
    Home,
    Invitation,
    Registry,
    Locations,
  },
  data() {
    return {
      loader: true,
    };
  },
  beforeMount() {
    this.$store.dispatch('getHomeData')
    this.$store.dispatch('getSliderData')
    this.$store.dispatch('getGifts')
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => {
        this.loader = false;
        this.$nuxt.$loading.finish()
      }, 3000)
    })
    
  }
};
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
</style>
