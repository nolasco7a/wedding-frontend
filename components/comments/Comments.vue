<template>
    <div class="comments">
        <v-row justify="center">
            <v-col cols="10">
                <h1 class="title-1 mb-4" style="height: auto !important">Dejanos tus comentarios</h1>
                <p>{{ message }}</p>
            </v-col>
            <v-col cols="10">
                <v-switch
                v-model="switchA"
                :label="`Anonimo`"
                ></v-switch>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col cols="10">
                <validation-observer ref="observer" v-slot="{ invalid }">
                <form @submit.prevent="submit">
                    <v-col cols="12" >
                        <validation-provider
                            v-slot="{ errors }"
                            name="name"
                            rules="required"
                        >
                            <v-text-field
                                v-model="name"
                                label="Nombre"
                                prepend-icon="mdi-account-edit"
                                :disabled="switchA"
                                :error-messages="errors"
                            ></v-text-field>
                        </validation-provider>
                    </v-col>
                    <v-col cols="12">
                        <validation-provider
                            v-slot="{ errors }"
                            name="comment"
                            rules="min:15|required"
                        >
                            <v-textarea
                            label="Default style"
                            v-model="comment"
                            :counter="300"
                            hint="Gracias por el comentario!"
                            clear-icon="mdi-close-circle"
                            clearable
                            rows="3"
                            prepend-icon="mdi-comment"
                            :error-messages="errors"
                            ></v-textarea>
                        </validation-provider>
                    </v-col>
                    <v-col cols="10">
                        <v-btn
                        color="primary"
                        :rounded="rounded"
                        :disabled="invalid"
                        class="gradient-1 btn-1"
                        @click="submit()"
                        >
                        Enviar Comentario
                        </v-btn>
                    </v-col>
                </form>
          </validation-observer>
            </v-col>
        </v-row>
        <v-snackbar color="green darken-1" dark v-model="snackbarResponse" timeout="10000" width="200">
            Comentario creado, exitosamente
            <template v-slot:action="{ attrs }">
                <v-btn
                color="white"
                light
                text
                v-bind="attrs"
                @click="snackbarResponse = false"
                >
                Cerrar
                </v-btn>
            </template>
        </v-snackbar>
        <SnackbarError v-if="snackbar!=''" :data="snackbar" />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import SnackbarError from "@/components/snackbars/SnackbarError.vue";
import { required, min, } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider, setInteractionMode, } from "vee-validate";
setInteractionMode("eager");
extend("required", {
  ...required,
  message: `El campo es obligatorio`,
});
extend("min", {
  ...min,
  message: "El comentario de tener min 15 caracteres",
});
    export default{
        name: 'Comments',
        components: {
            SnackbarError,
            ValidationObserver,
            ValidationProvider
        },
        data() {
            return{
                name: '',
                comment: '',
                message: null,
                switchA: false,
                oldName:'',
                snackbarResponse: false,
                alert: "",
                snackbar:'',
            }
        },
        methods:{
            async submit(){
                const data = {
                    name: this.name,
                    comment: this.comment
                }
                try {
                    await this.$axios.post("/new_comment", data)
                    .then((response) => {
                        this.alert = response.data;
                        this.snackbarResponse = true;
                        this.name = '';
                        this.comment = '';
                        this.oldName = '';
                        this.switchA = false;
                    })
                } catch (error) {
                    this.alert = error.response.data;
                    this.snackbar = {
                    show:true,
                    color:"red",
                    time: 5000,
                    message: "Uuups parece que ocurrio un error al enviar el comentario, intentalo de nuevo!"
                    };
                }
            }
        },
        computed: {
            ...mapGetters([
                'comments_message'
            ])
        },
        watch:{
            comments_message(Promise){
                Promise.then(message => { this.message = message })
            },
            switchA(val){
              if(val){
                this.oldName = this.name
                this.name = 'Anonimo'
              }else{
                this.name = this.oldName
              }
            },
        }
    }
</script>
<style lang="scss">
    .comments{
        margin: 2rem 0;
    }
</style>