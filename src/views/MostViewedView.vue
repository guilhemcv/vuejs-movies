<template>
  <MostViewedMovies />
  <MostViewedTvshows />
</template>

<script>
import MostViewedMovies from '@/components/MostViewedMovies.vue';
import MostViewedTvshows from '@/components/MostViewedTvshows.vue';
export default {
  components: {
    MostViewedMovies,
    MostViewedTvshows,
  },
};
</script>
