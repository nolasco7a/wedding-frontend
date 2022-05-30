<template>
    <div>
        <h1 class="font-3" style="text-align: center">Groom Squad</h1>
        <v-row>
            <div v-for="(item, index) in items" :key="index">
                <CardSquad :overlay="item.overlay" :classCard="item.classCard" :name="item.name" :imageCard="item.imageCard"/>
            </div>
        </v-row>
    </div>
</template>
<script>
import CardSquad from '@/components/CardSquad'
export default{
    components: { CardSquad },
    data() {
        return {
            items:[
                {overlay: false, name: "Groom-squad", imageCard: "../assets/images/groom-squad.jpg", classCard: "groom-squad"},
                {overlay: true, name: "Allan Nolasco" , imageCard: "../assets/images/groom-squad.jpg", classCard: "groom-squad"},
            ]
        };
    },
}
</script>