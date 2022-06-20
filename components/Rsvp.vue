<template>
  <div>
    <v-row>
      <v-col cols="lg-12" align="center">
        <v-btn
          color="primary"
          :rounded="rounded"
          :class="buttonClass"
          @click="sheet = !sheet"
        >
          {{ textButton }}
        </v-btn>
      </v-col>
    </v-row>
    <!-- modal -->
    <v-bottom-sheet v-model="sheet" inset>
      <v-sheet class="text-center" height="600px" style="overflow-y: scroll">
        <div class="my-3 container-form" style="padding: 2rem 3rem">
          <h3 class="title-wedding">Regístrate a nuestra boda</h3>
          <p class="my-3" style="text-align: left; font-size:.8rem">{{ textInvitation }}</p>
          <validation-observer ref="observer" v-slot="{ invalid }">
            <form @submit.prevent="submit">
              <v-row>
                <v-col cols="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="name"
                    rules="required"
                  >
                    <v-text-field
                      v-model="name"
                      :error-messages="errors"
                      label="Nombres"
                      required
                    ></v-text-field>
                  </validation-provider>
                </v-col>
                <v-col cols="6">
                  <validation-provider
                    v-slot="{ errors }"
                    name="lastname"
                    rules="required"
                  >
                    <v-text-field
                      v-model="lastname"
                      :error-messages="errors"
                      label="Apellidos"
                      required
                    ></v-text-field>
                  </validation-provider>
                </v-col>
              </v-row>
              <validation-provider
                v-slot="{ errors }"
                name="phone_number"
                rules="required|numeric|min:8"
              >
                 <v-text-field
                  v-model="phone_number"
                  :error-messages="errors"
                  label="Número de teléfono"
                  required
                ></v-text-field>
              </validation-provider>
              <validation-provider
                v-slot="{ errors }"
                name="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="email"
                  :error-messages="errors"
                  label="E-mail"
                  required
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="song"
                rules=""
              >
                <v-text-field
                  v-model="song"
                  :error-messages="errors"
                  label="¿Qué canción le gustaría escuchar en nuestra boda?"
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="allergies"
                rules=""
              >
                <v-text-field
                  v-model="allergies"
                  :error-messages="errors"
                  label="¿Es alérgico a algo?"
                ></v-text-field>
              </validation-provider>

              <validation-provider
                v-slot="{ errors }"
                name="otherEvent"
                rules=""
              >
                <v-text-field
                  v-model="otherEvent"
                  :error-messages="errors"
                  label="¿Celebra algo especial el día del evento?"
                ></v-text-field>
              </validation-provider>

              <div v-if="selectedGifts.length > 0">
                <h4 class="title-wedding-2">Mis regalos para los novios!</h4>
                <v-chip-group>
                  <v-chip
                    color="primary"
                    v-for="gift in selectedGifts"
                    :key="gift.id"
                    close
                    @click:close="removeGift(gift)"
                  >
                    {{ gift.name }}
                  </v-chip>
                </v-chip-group>
              </div>
                <v-checkbox
                  v-if="giftList.length > 0 && renderGifts===1"
                  v-model="show_gifts"
                  label="Me gustaria ver los apartados de regalos"
                ></v-checkbox>

              <div v-if="show_gifts && renderGifts===1">
                <div class="carousel-wrapper">
                  <client-only>
                    <carousel v-if="giftList" style="margin-bottom: 15px"
                              :paginationEnabled="false" :autoplay="true" :autoplayHoverPause="true" :perPageCustom="[[768, 2], [1024, 4]]">
                      <slide v-for="(gift, index) in giftList" :key="index">
                        <CardGift @add-gift="(id, name)=> addSelectedGift(id, name)" :data="gift"/>
                      </slide>
                    </carousel>
                  </client-only>
                </div>
              </div>
              <v-btn style="color: white" class="mr-4" color="red accent-1" @click="beforeSubmit">
                Enviar
              </v-btn>
              <v-btn color="teal darken-1" dark @click="clear">
                Limpiar campos
              </v-btn>
            </form>
          </validation-observer>
        </div>


        <v-snackbar
          v-model="snackbarVerify"
          light
          vertical="vertical"
          width="200"
        >
          Desde aquí podras verificar tu presencia como invitado o puedes
          hacerlo despues mediante un correo de invitación.

          <template v-slot:action="{ attrs }">
            <v-btn color="red accent-2" text v-bind="attrs" @click="verifyStatus(1)">
              verificarme
            </v-btn>
            <v-btn
              color="blue-grey"
              text
              v-bind="attrs"
              @click="verifyStatus(0)"
            >
              despues
            </v-btn>
          </template>
        </v-snackbar>
        <v-snackbar color="green darken-1" dark v-model="snackbarResponse" timeout="10000" width="200">
          {{ alert.message }}, gracias por registrarte!
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
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
<script>
import SnackbarError from "@/components/snackbars/SnackbarError.vue";
import { mapState, mapGetters } from "vuex";
import { required, email, numeric, min, } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider, setInteractionMode, } from "vee-validate";
setInteractionMode("eager");
extend("required", {
  ...required,
  message: `El campo es obligatorio`,
});
extend("email", {
  ...email,
  message: "Por favor ingrese un Email valido",
});
extend("numeric", {
  ...numeric,
  message: "El campo debe ser un número, no debe incluir guiones ni letras",
});
extend("min", {
  ...min,
  message: "El campo debe ser un número valido, min 8 caracteres",
});

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    SnackbarError,
  },
  name: "Registry",
  props: {
    textButton: {
      type: String,
      default: "RSVP",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    buttonClass: {
      type: String,
      default: "",
    },
    renderGifts: {
      type: Boolean,
      default: false,
    },
    textInvitation:{
      type: String,
      default: "",
    }
  },
  data: () => ({
    sheet: false,
    name: "",
    lastname: "",
    phone_number: "",
    email: "",
    status: 0,
    show_gifts: false,
    snackbarResponse: false,
    snackbarError: false,
    snackbarVerify: false,
    selectedGifts: [],
    alert: "",
    snackbar:'',
    song:'',
    allergies:'',
    otherEvent: '',
  }),
  methods: {
    removeGift(gift) {
      this.selectedGifts = this.selectedGifts.filter((giftSelected) => giftSelected.id !== gift.id);
    },
    addSelectedGift(id, name){
      this.selectedGifts.find(gift => gift.id === id)
        ? this.selectedGifts = this.selectedGifts.filter(gift => gift.id !== id)
        : this.selectedGifts.push({ id, name });
    },
    beforeSubmit() {
      this.snackbarVerify = true;
    },
    verifyStatus(status) {
      this.status = status;
      this.snackbarVerify = false;
      this.submit();
    },
    async submit() {
      this.$refs.observer.validate();
      const data = {
        name: this.name,
        lastname: this.lastname,
        phone_number: this.phone_number,
        email: this.email,
        status: this.status,
        selected_gifts: this.selectedGifts,
        song: this.song,
        allergies: this.allergies,
        other_event: this.otherEvent,
      };
      try{
        await this.$axios.post("/create_guest", data)
        .then((response) => {
            this.alert = response.data;
            this.snackbarResponse = true;
            this.$store.dispatch('getGifts')
            this.clear();
        })
        .catch((error) => {
            this.alert = error.response.data;
            this.snackbar = {
              show:true,
              color:"red",
              time: 5000,
              message: JSON.stringify(error.response.data.message)+" ,asegurate de llenar todos los campos correctamente.",
            };
        });
      } catch (error) {
        this.alert = {
          message: error.message,
        };
        this.snackbarError = true;
      }
    },
    clear() {
      this.name = "";
      this.lastname = "";
      this.phone_number = "";
      this.email = "";
      this.selectedGifts = [];
      this.$refs.observer.reset();
    },
  },
  computed: {
    ...mapState({
      giftList: (state) => state.giftList,
    }),
  },
};
</script>
