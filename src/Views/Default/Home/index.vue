<template>
  <v-container grid-list-lg>
    <v-layout row>
      <v-flex xs8 id="content">
        <Jobs />
      </v-flex>
      <v-flex xs4>
        <JobsSearch/>
        <!-- <Ads/> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Ads from 'Components/Ads';
import Jobs from 'Components/Jobs';
import JobsSearch from 'Components/JobsSearch';

export default {
  components: {
    Ads,
    Jobs,
    JobsSearch,
  },
};
</script>
