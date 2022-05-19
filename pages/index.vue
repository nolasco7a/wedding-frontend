<template>
  <div>
    <SideNav/>
    <Home/>
    <Invitation/>
    <Registry/>
    <Locations/>
    <!-- 
      Bride Squad
      Grooms Squad
      Suggest
      Locations
     -->
  </div>
</template>
<script>
import SideNav from '@/components/SideNav.vue'
import Home from '@/components/Home.vue'
import Invitation from '@/components/Invitation'
import Registry from '@/components/Registry'
import Locations from '@/components/Locations'
export default {
  components: {
    SideNav,
    Home,
    Invitation,
    Registry,
    Locations
  }
}
</script>
<style lang="scss">
  @import './assets/styles/main.scss';
</style>
