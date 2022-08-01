<template>
  <div class="w-screen py-10 ml-auto mr-auto">
    <div class="flex flex-wrap justify-center">
      <div v-for="movie in movies">
        <div class="card-zoom">
          <img
            class="card-zoom-image"
            :src="imageChecker(movie.poster_path)"
            alt="{{movie.title}}"
          />
          <h2 class="card-zoom-text">{{ movie.title }}</h2>
        </div>
        <div class="flex justify-center mb-5">
          <router-link
            class="px-4 py-2 mx-auto font-semibold text-white bg-red-600 border border-red-600 rounded hover:bg-red-500 hover:text-white hover:border-transparent"
            :to="{
              name: 'detailFilm',
              params: { id: movie.id, type: 'film' },
            }"
          >
            Détail
          </router-link>
        </div>
      </div>
    </div>
    <Pagination @update="forceUpdate($event)" />
  </div>
      <back-to-top text="Back to top"></back-to-top>
</template>

<script>
import axios from 'axios';
import Pagination from './Pagination.vue';

export default {
  name: 'FilmsView',
  components: {
    Pagination,
  },
  data() {
    return {
      movies: [],
      page: 1,
      newKey: 0,
    };
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_API_TMDB
        }&language=fr-FR&page=${this.page}`
      )
      .then((res) => {
        this.movies = res.data.results;
      })
      .catch((err) => console.error(err));
  },

  methods: {
    forceUpdate(number) {
      this.$forceUpdate();
      axios
        .get(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${
            import.meta.env.VITE_API_TMDB
          }&language=fr-FR&page=${number}`
        )
        .then((res) => {
          this.movies = res.data.results;
          this.newKey = this.newKey + 1;
        })
        .catch((err) => console.error(err));
    },
    imageChecker(image) {
      if (image === null || image === undefined || image === '') {
        return 'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg';
      } else {
        return `https://image.tmdb.org/t/p/w300/${image}`;
      }
    },
  },
};
</script>
