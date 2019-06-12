<template>
  <v-card class="pa-3" color="primary" dark>
    <v-layout row wrap>
      <v-flex md12>
        <div class="body-2">
          Área
        </div>
      </v-flex>
      <v-flex md12>
        <v-autocomplete
          solo
          clearble
          light
          style="height: 50px"
          v-model="form.area"
          label="Área de atuação"
          :items="Object.keys(areas)"
          persistent-hint
        />
      </v-flex>
      <v-flex md12>
        <v-autocomplete
          solo
          clearble
          light
          style="height: 50px"
          v-model="form.specialization"
          label="Especialização"
          :readonly="!form.area.length"
          :items="areas[form.area]"
          persistent-hint
        />
      </v-flex>
      <v-flex md12>
        <v-layout>
          <v-spacer></v-spacer>
          <v-btn color="white" outline class="full-width">
            Pesquisar
            <v-icon right>search</v-icon>
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  computed: {
    areas() {
      return this.$store.getters['Jobs/areas'];
    },
  },
  data: () => ({
    form: {
      area: '',
      specialization: '',
    },
  }),
};
</script>
