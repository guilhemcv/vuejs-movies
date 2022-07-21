<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <button
        @click="isOpen = true"
        class="px-6 py-2 mb-10 text-white bg-gray-500 rounded shadow"
        type="button"
      >
        Plus de détails
      </button>

      <div
        v-show="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-80"
      >
        <div
          class="w-screen h-screen p-6 bg-gray-800 rounded-md shadow-xl my-14"
        >
          <div class="flex items-center justify-between">
            <h3 v-if="movie" class="text-2xl">{{ movie.title }}</h3>
            <h3 v-else class="text-2xl">{{ show.name }}</h3>

            <svg
              @click="isOpen = false"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-gray-300 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-4">
            <p v-if="movie" class="mb-4 text-sm">
              {{ movie.overview }}
            </p>
            <p v-else class="mb-4 text-sm">{{ show.overview }}</p>
            <button
              @click="isOpen = false"
              class="px-6 py-2 border border-gray-300 rounded text-grey-300"
            >
              Retour
            </button>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

export default {
  props: {
    movie: Object,
    show: Object,
  },
  data() {
    return {
      isOpen: false,
    };
  },
  /* mounted() {
    this.loading = true;
    movie = this.movie;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie}?api_key=${
          import.meta.env.VITE_API_TMDB
        }&language=fr-FR`
      )
      .then((res) => {
        this.oneMovie = res.data.results;
      })
      .catch((err) => console.error(err))
      .finally(() => {});
  }, */
};

</script>
