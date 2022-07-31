<template>
    <div
      v-if="
        loadTrending === false &&
        loadMostRated === false &&
        loadMostPopular === false
      "
      class="flex flex-col items-center justify-center h-screen pb-60 md:pb-40"
    >
      <h2 class="pb-10 text-3xl font-bold text-center underline">Les Séries</h2>

      <button
        @click="loadTrending = true"
        class="flex items-center justify-around h-20 px-4 py-2 font-semibold text-white bg-transparent border border-white rounded shadow-xl w-72 md:w-96 hover:bg-red-500 hover:text-white hover:border-transparent"
      >
        Tendances aujourd'hui
        <img src="../assets/images/trend.png" alt="trend">
      </button>
      
      <button
        @click="loadMostPopular = true"
        class="flex items-center justify-around h-20 px-4 py-2 my-5 font-semibold text-white bg-transparent border border-white rounded shadow-xl w-72 md:w-96 hover:bg-red-500 hover:text-white hover:border-transparent"
      >
        Séries les plus populaires 
        <img src="../assets/images/fire.png" alt="fire" >
        
      </button>
      <button
        @click="loadMostRated = true"
        class="flex items-center justify-around h-20 px-4 py-2 font-semibold text-white bg-transparent border border-white rounded shadow-xl w-72 md:w-96 hover:bg-red-500 hover:text-white hover:border-transparent"
      >
        Séries les mieux notés 
        <img src="../assets/images/badge.png" alt="badge">
      </button>
    </div>
    <div v-if="loadMostPopular" class="mb-10">
      <div class="flex justify-center mt-10">
        <button
          @click="loadMostPopular = false"
          class="px-4 py-2 mx-auto font-semibold text-white bg-transparent border border-white rounded hover:bg-red-500 hover:text-white hover:border-transparent"
        >
          Retour
        </button>
      </div>
      <MostPopular />
    </div>
    <div v-if="loadTrending" class="mb-10">
      <div class="flex justify-center mt-10">
        <button
          @click="loadTrending = false"
          class="px-4 py-2 mx-auto font-semibold text-white bg-transparent border border-white rounded hover:bg-red-500 hover:text-white hover:border-transparent"
        >
          Retour
        </button>
      </div>
      <Trending />
    </div>
    <div v-if="loadMostRated" class="mb-10">
      <div class="flex justify-center mt-10">
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
import MostRated from '../components/MostRatedShows.vue';
import Trending from '../components/TrendingShows.vue';
import MostPopular from '../components/MostPopularShows.vue';
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
