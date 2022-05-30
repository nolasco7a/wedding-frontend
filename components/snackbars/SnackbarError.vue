<template>
    <v-snackbar 
    v-model="data.show" 
    :color="data.color" 
    :timeout="data.time"
    :vertical="data.vertical"
    :light="data.light"
    :dark="data.dark"
    width="200">
        {{ data.message }}
        <template v-slot:action="{ attrs }">
        <v-btn
            text
            v-bind="attrs"
            @click="data.show = false"
        >
            Cerrar
        </v-btn>
        </template>
    </v-snackbar>
</template>
<script>
    export default{
        props: {
            data: {
                type: Array,
                required: true,
                default: () => {
                    return {
                        show: false,
                        color: '',
                        time: 5000,
                        vertical: 'vertical',
                        message: '',
                        light: false,
                        dark: false
                    }
                }
            }
        },
    }
</script>