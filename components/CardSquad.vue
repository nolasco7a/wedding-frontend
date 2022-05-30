<template>
    <div :class="classCard">
        <img :src="imageCard" alt="">
        <div v-if="overlay" class="overlay-card">
            <h1>{{ name }}</h1>
        </div>
    </div>
</template>
<script>
    export default {
        name: "BrideSquad",
        props: {
            overlay: {
                type: Boolean,
                default: true
            },
            name: {
                type: String,
                default: ""
            },
            imageCard: {
                type: String,
                default: ""
            },
            classCard: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
               
            };
        },
    };
</script>