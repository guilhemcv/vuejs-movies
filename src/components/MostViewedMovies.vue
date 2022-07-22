<template>
<div class="w-screen ml-auto mr-auto">
    <h1 class="mt-5 mb-5 text-2xl text-center md:text-4xl bold">Top 20 Films à l'affiche</h1>
    <p v-if="loading">Chargement en cours...</p>
    <div v-else class="flex flex-wrap justify-center">
      <div v-for="movie in movies">
        <div class="card-zoom">
          <img
            class="card-zoom-image"
            :src="imageChecker(movie.poster_path)"
            alt="{{movie.title}}"
          />
          <h2 class="card-zoom-text">{{ movie.title }}</h2>
        </div>
        <CardModal v-if="movie" :movie="movie" @check="imageChecker" />
      </div>
    </div>
  </div>
  </template>

<script>
import axios from 'axios';
import CardModal from '@/components/CardModal.vue';

export default {
  components: {
    CardModal,
  },
  name: 'MostViewedMovies',
  data() {
    return {
      loading: false,
      movies: null,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_API_TMDB
        }&language=fr-FR`
      )
      .then((res) => {
        this.movies = res.data.results;
      })
      .catch((err) => console.error(err))
      .finally(() => {
        console.log(this.movies);
        this.loading = false;
      });
  },
  methods: {
    imageChecker(image) {
      if (image === null) {
        return 'https://via.placeholder.com/500x750';
      } else {
        return `https://image.tmdb.org/t/p/w300/${image}`;
      }
    },
  },
};
</script>
