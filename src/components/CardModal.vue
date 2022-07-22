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
      oneMovie: null,
    };
  },
  methods: {
    check() {
      this.$emit('check');
    },
  },
  mounted() {
    this.loading = true;
    console.log(this.movie.id);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.movie.id}?api_key=${
          import.meta.env.VITE_API_TMDB
        }&language=fr-FR`
      )
      .then((res) => {
        console.log(res.data);
        this.oneMovie = res.data;
      })
      .catch((err) => console.error(err));
  },
};
</script>

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
          class="w-auto h-screen p-6 bg-gray-800 rounded-md shadow-xl md:w-[800px] my-14"
        >
          <div class="flex justify-between">
            <h3 v-if="movie" class="text-2xl text-center">{{ movie.title }}</h3>
            <h3 v-else class="text-2xl">{{ show.name }}</h3>

            <svg
              @click="isOpen = false"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-gray-300 cursor-pointer tea"
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
          <div class="flex flex-col mt-4">
            <img
              v-if="oneMovie"
              :src="check(oneMovie.backdrop_path)"
              alt=""
            />
            <p v-if="movie" class="w-11/12 mx-auto mb-4 text-sm">
              {{ movie.overview }}
            </p>
            <p v-else class="mb-4 text-sm">{{ show.overview }}</p>

            <p v-if="oneMovie">date de sortie : {{ oneMovie.release_date }}</p>
            <button
              @click="isOpen = false"
              class="px-6 py-2 text-center border border-gray-300 rounded text-grey-300"
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
