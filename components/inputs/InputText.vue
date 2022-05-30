<template>
  <div>
    <validation-provider
      v-slot="{ errors }"
      name="input"
      :rules="rules"
    >
      <v-text-field
        v-model="input"
        :error-messages="errors"
        :label="label"
        required
        @keyup="emitValue()"
      ></v-text-field>
    </validation-provider>
  </div>
</template>
<script>
//section import
import {extend, ValidationProvider} from "vee-validate";
import {required, email, numeric, min} from "vee-validate/dist/rules";
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
export default{
  components:{
    ValidationProvider,
  },
  data: () =>({
      input: "",
  }),
  props:{
    name:{
      type: String,
      required: true,
    },
    label:{
      type: String,
      required: true,
    },
    rules:{
      type: String,
      required: true,
    },
    clear:{
      type: Boolean,
      default: false
    },
  },
    //section methods
    methods:{
      emitValue(){
        this.$emit('send-value', {
          name: this.name,
          value: this.input
        })
      },
    },
    watch:{
      clear: function(){
        if(this.clear) this.input='';
      }
    }
  }
</script>
