import axios from 'axios';
<template>
  <div class="w-screen ml-auto mr-auto">
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
          <CardModal v-if="movie" :movie="movie" :movieId="movie.id" />
      </div>
    </div>
    <Pagination @update="forceUpdate($event)" />
  </div>
</template>

<script>
import axios from 'axios';
import CardModal from '@/components/CardModal.vue';
import Pagination from './Pagination.vue';
export default {
  name: 'FilmsView',
  components: {
    CardModal,
    Pagination,
  },
  data() {
    return {
      movies: [],
      page: 1,
    };
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_API_TMDB
        }&language=fr-FR&page=1`
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
        })
        .catch((err) => console.error(err));
    },
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
