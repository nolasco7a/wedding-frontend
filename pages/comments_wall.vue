<template>
    <div>
        <Loader v-if="loader"/>
        <SideNav :items="routes"/>
        <h1 class="title-section" style="margin-top: 4rem; text-align: center;">Muro de comentarios</h1>
        <div class="wrapper clearfix">
            <Comment v-for="comment in comments" :key="comment.id" :data="comment"/>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import Comment from '@/components/comments/Comment'
    export default{
        name: 'Comments',
        components: {
            Comment
        },
        data() {
            return {
                loader: true,
                routes: [
                    { title: "Home", hash: "/" },
                    { title: "Hospedaje", hash: "/lodging" },
                    { title: "Beauty & Makeup", hash: "/beauty" },
                ],
            };
        },
        computed: {
            ...mapState({
                comments: state => state.comments,
            }),
        },
        beforeMount() {
            this.$store.dispatch("getComments");
        },
        mounted() {
        this.$nextTick(() => {
            this.$nuxt.$loading.start();
            setTimeout(() => {
                this.loader = false;
                this.$nuxt.$loading.finish();
            }, 1000);
        });
        //init scroll 0
        window.scrollTo(0, 0);
    },
    }
</script>
<style lang="scss">
@import "./assets/styles/main.scss";
</style>