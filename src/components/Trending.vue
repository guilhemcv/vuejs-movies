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
        <CardModal
          v-if="movie"
          :movie="movie"
          :movieId="movie.id"
        />
      </div>
    </div>
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
    };
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${
          import.meta.env.VITE_API_TMDB
        }`
      )
      .then((res) => {
        this.movies = res.data.results;
      })
      .catch((err) => console.error(err));
  },

  methods: {
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
