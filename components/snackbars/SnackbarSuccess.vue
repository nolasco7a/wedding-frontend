<template>
  <div>
    <v-snackbar v-model="snackbarResponse" timeout="10000" light width="200">
      {{ alert.message }}, gracias por registrarte!
      <template v-slot:action="{ attrs }">
        <v-btn
          color="red accent-2"
          text
          v-bind="attrs"
          @click="snackbarResponse = false"
        >
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
script
