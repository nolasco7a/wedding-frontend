<template>
    <section class="home" v-if="home_data">
        <img :src="`http://wedding.test/storage/${home_data.background_image}`" class="bg-image" alt="">
        <div class="home-text">
            <div class="title-1">{{ home_data.title_1 }}</div>
            <div class="title-2">{{ home_data.title_2 }}</div>
            <div class="title-3">
                {{ home_data.title_3}}
                <br>
                <Rsvp 
                    :textButton="home_data.button_text" 
                    :rounded="true"
                    buttonClass="gradient-1 btn-1"
                />
            </div>
        </div>
    </section>
</template>
<script>
import { mapState } from 'vuex'
import Rsvp from './Rsvp'
export default ({
    name: 'Home',
    components: {
        Rsvp
    },
    computed: {
    ...mapState({
      home_data: state => state.homeData,
    })
  },
})
</script>
