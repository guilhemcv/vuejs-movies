<template>
  <div class="translate-y-20">
    <div class="flex items-center justify-center mt-5">
      <button
        @click="comp = 'movies'"
        class="px-6 py-2 mb-10 mr-1 text-white bg-red-500 rounded shadow"
      >
        Films
      </button>
      <button
        @click="comp = 'tvshows'"
        class="px-6 py-2 mb-10 ml-1 text-white bg-red-500 rounded shadow"
      >
        Séries
      </button>
    </div>
    <keep-alive>
      <component :is="comp" />
    </keep-alive>

    <!--  <MostViewedMovies />
  <MostViewedTvshows /> -->
  </div>
</template>

<script>
import MostViewedMovies from '../components/MostViewedMovies.vue';
import MostViewedTvshows from '../components/MostViewedTvshows.vue';
export default {
  components: {
    movies: MostViewedMovies,
    tvshows: MostViewedTvshows,
  },
  data() {
    return {
      comp: MostViewedMovies,
    };
  },
};
</script>
