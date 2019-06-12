<template>
  <v-layout row wrap>
    <v-flex xs12 v-for="job in jobs" :key="job.id">
      <v-hover>
        <v-card
          slot-scope="{ hover }"
          :class="`elevation-${hover ? 8 : 2} ${hover && 'primary theme--dark'}`"
          style="transition: .2s ease; cursor: pointer;"
          >
          <v-card-title>
            <div style="width: 100%">
              <div class="headline">{{ job.title }}</div>
              <div class="body-2 descricao my-2">{{ job.description }}</div>
              <div class="body-1 salario my-2">
                <span v-if="typeof job.salary === 'object'">
                  {{ `R$${job.salary[0]}` }} — {{ `R$${job.salary[1]}` }}
                </span>
                <span v-else>
                  {{ `R$${job.salary}` }}
                </span>
              </div>
              <div class="my-2" style="display: flex;algin-content:center;">
                <span class="subhead">{{ job.author.name }}</span>
                <div class="mr-2">
                  <v-avatar size="24" class="elevation-3 ml-2">
                    <img :src="job.author.avatar">
                  </v-avatar>
                </div>
                <v-rating
                  :value="job.author.rating"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                ></v-rating>
                <v-spacer></v-spacer>
                <v-btn outline :color="hover ? 'white' : 'primary'">
                  Detalhes
                </v-btn>
                <v-btn :color="hover ? 'white' : 'primary'">
                  Tenho Interesse
                  <v-icon right small>thumb_up</v-icon>
                </v-btn>
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-hover>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  computed: {
    jobs() {
      return this.$store.getters['Jobs/all'];
    },
  },
};
</script>

<style scoped>
.elevation-8 {
  transform: translateY(-2px);
}
</style>

