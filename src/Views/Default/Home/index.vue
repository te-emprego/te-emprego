<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 md4 v-for="i in 4" :key="i">
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 8 : 2} ${hover && 'primary theme--dark'}`"
            style="transition: .2s ease; cursor: pointer;"
            >
            <v-card-title>
              <div>
                <span class="headline">Desenvolvedor Front End</span>
                <div class="my-2">
                  <span class="subhead">Nubank</span>
                  <v-avatar size="24" class="elevation-3 ml-2">
                    <img src="https://www.nubank.com.br/images/nu-icon.png">
                  </v-avatar>
                </div>
                <div class="d-flex">
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14"
                  ></v-rating>
                </div>
              </div>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style lang="scss" scoped>
.elevation-8 {
  transform: translateY(-2px);
}
</style>
