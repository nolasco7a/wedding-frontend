<template>
   <div>
       <h1 class="font-4" style="text-align:center; font-size:2rem ">Bride Squad</h1>
        <v-row>
           <div v-for="(item, index) in bride_squad" :key="index">
                <CardSquad :overlay="true" classCard="bride-squad" :name="item.name" :imageCard="item.image"/>
            </div>
        </v-row>
   </div>
</template>
<script>
import CardSquad from '@/components/CardSquad'
import { mapState } from 'vuex'
export default {
    components: { CardSquad },
    computed: {
        ...mapState({
        bride_squad: state => state.brideSquad,
        })
    },
}
</script>