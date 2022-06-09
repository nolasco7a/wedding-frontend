<template>
    <div>
        <v-card class="my-4 shadow-3" >
            <v-img
            height="80px"
                :src="correctUrl(background)"
                dark
            >
                <v-card-title>{{ data.name }}</v-card-title>
            </v-img>
            <v-card-body>
                <v-chip :color="color" dark class="ma-4">{{ dataType(data.type) }}</v-chip>
                <v-card-subtitle>{{ data.name }}: </v-card-subtitle>
                <v-card-text>{{ data.description }}</v-card-text>
                <v-card-actions>
                    <v-btn v-if="data.phone" icon color="indigo darken-4" >
                        <a :href="`tel:${data.phone}`"><v-icon>mdi-phone</v-icon></a>
                    </v-btn>
                    <v-btn v-if="data.web" icon color="indigo darken-4" >
                        <a :href="data.web" target="_blanck"><v-icon>mdi-search-web</v-icon></a>
                    </v-btn>
                    <v-btn v-if="data.email" icon color="indigo darken-4" >
                        <a :href="`mailto:${data.email}`"><v-icon>mdi-email</v-icon></a>
                    </v-btn>
                </v-card-actions>
            </v-card-body>
        </v-card>
    </div>
</template>
<script>
    export default {
        name: "CardLocation",
        props:{
            data:{
                type: Object,
                required: true,
            },
            background: {
                type: String,
                default: ""
            },
        },
        data(){
            return{
                color: '',
            }
        },
        methods:{
            correctUrl(url) {
                if (url) {
                    return `${process.env.imageURL}${url}`
                }else{
                    return 'http://lopezchavezwedding.website/storage/default-images/default-lodging.jpg'
                }
            },
            dataType(type){
                switch (type){
                    case 1:
                        this.color = 'teal darken-3'
                        return 'Hospedaje'
                    case 2:
                        this.color = 'pink darken-1'
                        return 'Beauty & Make Up'
                    case 3:
                        this.color = 'light-blue darken-4'
                        return 'Barber Shop'
                }
            }
        },
        
    }
</script>
<style lang="scss">
    v-card-body{
        a{
            text-decoration: none !important;
        }
    }
</style>