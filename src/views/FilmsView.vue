<template >
  <div v-if="loadMostPopular === false" class="flex flex-col items-center justify-around my-20 h-400">
    <button
      @click="loadMostPopular = true"
      class="h-20 px-4 py-2 font-semibold text-white bg-transparent border border-white rounded w-96 hover:bg-red-500 hover:text-white hover:border-transparent"
    >
      Meilleurs films de tout les temps
    </button>
    <button
      @click="loadMostPopular = true"
      class="h-20 px-4 py-2 font-semibold text-white bg-transparent border border-white rounded w-96 hover:bg-red-500 hover:text-white hover:border-transparent"
    >
      Pires films de tout les temps
    </button>
    <button
      @click="loadMostPopular = true"
      class="h-20 px-4 py-2 font-semibold text-white bg-transparent border border-white rounded w-96 hover:bg-red-500 hover:text-white hover:border-transparent"
    >
      A venir
    </button>
  </div>
  <div v-if="loadMostPopular">
    <button
      @click="loadMostPopular = false"
      class="px-4 py-2 font-semibold text-white bg-transparent border border-white rounded hover:bg-red-500 hover:text-white hover:border-transparent"
    >
      Retour
    </button>
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
  data() {
    return {
      loadMostPopular: false,
    };
  },
};
</script>
