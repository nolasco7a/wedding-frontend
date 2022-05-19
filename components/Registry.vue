<template>
    <section class="registry">
        <!-- busca tu numero o correo electronico para confirmar tu invitacion via correo electronico -->
      <v-row>
        <v-col cols="lg-12" align="center">
          <h1>LETS PARTY</h1>
          <p>Kindly Respond By Aug 21, 2023</p>
          <v-btn
          color="primary"
          @click="sheet=!sheet"
        >
          Register Now
        </v-btn>
        </v-col>
      </v-row>

      <!-- modal -->
      <v-bottom-sheet
        v-model="sheet"
        inset
      >
      <v-sheet
        class="text-center"
        height="200px"
      >
        <v-btn
          class="mt-6"
          text
          color="error"
          @click="sheet = !sheet"
        >
          close
        </v-btn>
        <div class="my-3">
          This is a bottom sheet using the inset prop
        </div>
      </v-sheet>
    </v-bottom-sheet>
        
    </section>
</template>
<script>
  export default {
    name: 'Registry',
    data: () => ({
      sheet: false,
    }),
  }
</script>