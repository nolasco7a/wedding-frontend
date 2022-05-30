<template>
    <div>
        <v-card class="gift-card">
             <v-img
            class="image-gift-card"
            max-height="200"
            contain
            :src="correctUrl(data.image)"
            ></v-img>
            <v-card-title class="titlle-gift-card">{{ data.name }}</v-card-title>
            <div class="description-gift-card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tenetur veniam praesentium provident, nostrum quidem voluptate neque cum enim natus.{{ data.description }}</div>
            <v-card-actions justify-space-between>
                <v-btn rounded outlined class="btn-gift-card" @click="addGift" color="pink" x-small dark eleevation="2">
                    <v-icon small>mdi-gift</v-icon>
                </v-btn>
                <a :href="data.link" v-if="data.link" class="link-gift-card" target="_blank"><v-icon small>mdi-web</v-icon></a>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default {
    emits: {
        'addGift'(payload){
            if(typeOf(payload.id) === 'number'){
                return this.data.id
            }else{
                return null
            }
        }
    },
    props: {
        data: {
            type: Array,
            required: true
        }
    },
    data: ()=>({
        snackbar: false,
    }),
    methods: {
         correctUrl(url) {
            if (url) {
                return `${process.env.imageURL}${url}`
            }
        },
        addGift(){
          this.$emit('add-gift',this.data.id, this.data.name)
        }
    }

}
</script>
<style>
    .gift-card{
        overflow: hidden;
        box-shadow: none !important;
        width: 200px !important;
    }
    .image-gift-card{
        width: 190px;
        height: 200px;
    }
    .titlle-gift-card{
        font-size: 1rem;
        font-weight: bold;
        text-overflow: ellipsis !important;
        overflow: hidden !important;
        white-space: nowrap !important;
        display: block !important;
        text-align: left;

    }
    .description-gift-card{
        font-size: 0.8rem;
        text-align: left;
        display: block !important;
        text-overflow: ellipsis !important;
        word-wrap: break-word !important;
        overflow: hidden !important;
        max-height: 3.6em !important;
        line-height: 1.8em !important;

    }
    .link-gift-card{
      color: #0b3238;
      text-decoration: none;
      padding: 0 1rem;
    }
    .btn-gift-card{
        padding: 1rem 1rem !important;
    }
</style>
