<template>
    <div :class="classCard">
        <img :src="correctUrl(imageCard)" alt="">
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
            return {};
        },
        methods: {
        correctUrl(url) {
            if (url) {
                return `${process.env.imageURL}${url}`
            }
        }
    },
    };
</script>