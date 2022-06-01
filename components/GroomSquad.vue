<template>
    <div v-if="groom_squad != null">
        <h1 class="font-3" style="text-align: center">Groom Squad</h1>
        <v-row>
            <div v-for="(item, index) in groom_squad" :key="index">
                <CardSquad :overlay="true" classCard="groom-squad" :name="item.name" :imageCard="item.image"/>
            </div>
        </v-row>
    </div>
</template>
<script>
import CardSquad from '@/components/CardSquad'
import { mapState } from 'vuex'
export default{
    components: { CardSquad },
    data() {
        return {};
    },
    computed: {
    ...mapState({
      groom_squad: state => state.groomSquad,
    })
  },
}
</script>