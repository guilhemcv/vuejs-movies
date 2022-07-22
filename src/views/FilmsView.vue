<template>
  <div class="">
    <h1>Films les + populaires</h1>
    <MostPopulareMovieVue />
  </div>
</template>

<script>
import MostPopulareMovieVue from '../components/MostPopulareMovie.vue';
export default {
  name: 'FilmsView',

  components: {
    MostPopulareMovieVue,
  },
};
</script>
