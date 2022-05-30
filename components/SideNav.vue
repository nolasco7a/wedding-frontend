<template>
  <v-menu transition="slide-x-transition" bottom right z-index="9999">
    <template v-slot:activator="{ on, attrs }">
      <v-app-bar
        :collapse="true"
        fixed
        color="pink darken-2"
        dark
        height="50px"
        width="100px"
      >
        <v-app-bar-nav-icon v-bind="attrs" v-on="on"> </v-app-bar-nav-icon>
      </v-app-bar>
    </template>

    <v-list class="app-bar">
      <v-list-item v-for="(item, i) in items" :key="i">
      <nuxt-link :to="item.hash">{{ item.title }}</nuxt-link>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
<script>
export default {
  name: "SideNav",
  data: () => ({
    collapseOnScroll: false,
    items: [
      { title: "Home", hash: "#home" },
      { title: "Invitation", hash: "#invitation" },
      { title: "Detalles", hash: "#details"},
      { title: "Resgitro", hash: "#registry" },
      { title: "Bride Squad", hash: "#bride-squad" },
      { title: "Grooms Squad", hash: "#grooms-squad" },
      { title: "Locations", hash: "#locations" },
      { title: "Suggest", hash: "#suggest" },
    ],
  }),
};
</script>