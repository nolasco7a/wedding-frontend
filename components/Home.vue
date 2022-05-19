<template>
    <section class="home">
        <img :src="backgroundImage" class="bg-image" alt="">
        <div class="home-text">
            <div class="title-1">{{ sectionData.title_1 }}</div>
            <div class="title-2">{{ sectionData.title_2 }}</div>
            <div class="title-3">
                {{ sectionData.title_3}}
                <br>
                <button class="gradient-1 btn-1 shadow-3">{{ sectionData.button_text }}</button>
            </div>
        </div>
    </section>
</template>
<script>
export default ({
    name: 'Home',
    data() {
        return {
            sectionData:'',
            backgroundImage: '',
        }
    },
    methods: {
        async getGuests() {

            const response = await this.$axios.get('home_data')
            console.log(response.data)
            this.sectionData = response.data
            this.backgroundImage = 'http://wedding.test/storage/'+this.sectionData.background_image
        },
    },
    mounted() {
        this.getGuests()
    },
})
</script>
