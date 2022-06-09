<template>
    <section>
        <v-container>
            <v-row justify="center">
               <v-col cols="10">
                   <h1 class="title-section">Sugerencias de hospedaje</h1>
                   <h4 class="subtitle-section">{{ message }}</h4>
                   <CardLocation :data="location" v-for="location in locations" :key="location.id" />
               </v-col>
            </v-row>
        </v-container>
    </section> 
</template>
<script>
import CardLocation from '@/components/locations/CardLocation'
export default {
    name: 'BodyLodging',
    components:{
        CardLocation
    },
    props:{
        locations:{
            type: Array,
            required: true
        },
        message:{
            type: String,
            required: true
        },
    },
}
</script>
<style lang="scss">
.title-section{
    text-transform: uppercase;
    font-family: "Outfit", sans-serif;
    letter-spacing: .5rem;
    margin-top: 16px
}
.subtitle-section{
    padding: 2rem 0;
    font-weight: 300;
    font-size: medium;
}
</style>