<template>
  <div
    v-if="loadTrending === false && loadMostRated === false && loadMostPopular === false"
    class="flex flex-col items-center justify-center h-full my-20 translate-y-20 md:translate-y-0 pb-60 md:pb-40"
  >
    <button
      @click="loadTrending = true"
      class="h-20 px-4 py-2 font-semibold text-white bg-transparent border border-white rounded w-72 md:w-96 hover:bg-red-500 hover:text-white hover:border-transparent"
    >
      Tendances actuelles
    </button>
    <button
      @click="loadMostPopular = true"
      class="h-20 px-4 py-2 my-5 font-semibold text-white bg-transparent border border-white rounded w-72 md:w-96 hover:bg-red-500 hover:text-white hover:border-transparent"
    >
      Films les plus populaires
    </button>
    <button
      @click="loadMostRated = true"
      class="h-20 px-4 py-2 font-semibold text-white bg-transparent border border-white rounded w-72 md:w-96 hover:bg-red-500 hover:text-white hover:border-transparent"
    >
      Films les mieux notés
    </button>
  </div>
  <div v-if="loadMostPopular" class="translate-y-40">
    <div class="flex justify-center">
      <button
        @click="loadMostPopular = false"
        class="px-4 py-2 mx-auto font-semibold text-white bg-transparent border border-white rounded hover:bg-red-500 hover:text-white hover:border-transparent"
      >
        Retour
      </button>
    </div>
    <MostPopular />
  </div>
  <div v-if="loadTrending" class="mb-10 translate-y-40">
    <div class="flex justify-center">
      <button
        @click="loadTrending = false"
        class="px-4 py-2 mx-auto font-semibold text-white bg-transparent border border-white rounded hover:bg-red-500 hover:text-white hover:border-transparent"
      >
        Retour
      </button>
    </div>
    <Trending />
  </div>
  <div v-if="loadMostRated" class="mb-10 translate-y-40">
    <div class="flex justify-center">
      <button
        @click="loadMostRated = false"
        class="px-4 py-2 mx-auto font-semibold text-white bg-transparent border border-white rounded hover:bg-red-500 hover:text-white hover:border-transparent"
      >
        Retour
      </button>
    </div>
    <MostRated />
  </div>
</template>

<script>
import MostRated from '../components/MostRatedMovie.vue';
import Trending from '../components/Trending.vue';
import MostPopular from '../components/MostPopular.vue';
export default {
  name: 'FilmsView',

  components: {
    MostRated,
    Trending,
    MostPopular,
  },
  data() {
    return {
      loadMostRated: false,
      loadTrending: false,
      loadMostPopular: false,
      
    };
  },
};
</script>
