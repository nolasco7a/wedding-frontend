<template>
  <div>
    <v-carousel 
        v-if="data"
        :interval="5000"
        :cycle="true"
        :show-arrows="true"
        :hide-delimiters="false"
        :hide-delimiter-background="true"
    >
      <v-carousel-item
        v-for="(image, index) in data"
        :key="index"
        :src="`http://wedding.test/storage/${image.image}`"
      >
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
  export default {
    data () {},
    props: {
      data: {
        type: Array,
        required: true
      }
    }
  }
</script>