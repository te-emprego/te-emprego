<template>
  <v-layout row wrap>
    <v-flex d-flex md6 xs12>
      <v-card color="primary" class="white--text px-2 pb-3 limao">
        <v-layout align-end>
          <v-flex xs8>
            <v-card-title primary-title>
              <div class="headline">Controle de Transparência</div>
              <div>Sistema de controle e gestão de transparência.</div>
            </v-card-title>
          </v-flex>
          <v-flex xs4>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white" @click="$router.push({ name: 'Limao' })">Acessar</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
    <v-flex d-flex md6 xs12>
      <v-card color="amber" class="px-2 pb-3 limao">
        <v-layout align-end>
          <v-flex xs8>
            <v-card-title primary-title>
              <div class="headline">Configurações do Sistema</div>
              <div>Configure disposições, cores e outras coisas.</div>
            </v-card-title>
          </v-flex>
          <v-flex xs4>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="white" @click="$router.push({ name: 'Limao' })">Acessar</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>
