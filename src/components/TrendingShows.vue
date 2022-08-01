<template>
  <div class="w-screen py-10 ml-auto mr-auto">
    <div class="flex flex-wrap justify-center">
      <div v-for="show in shows">
        <div class="card-zoom">
          <img
            class="card-zoom-image"
            :src="imageChecker(show.poster_path)"
            alt="{{show.name}}"
          />
          <h2 class="card-zoom-text">{{ show.name }}</h2>
        </div>
        <div class="flex justify-center mb-5">
          <router-link
            class="px-4 py-2 mx-auto font-semibold text-white bg-red-600 border border-red-600 rounded hover:bg-red-500 hover:text-white hover:border-transparent"
            :to="{
              name: 'detailSerie',
              params: { id: show.id, type: 'serie' },
            }"
          >
            Détail
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Pagination from './Pagination.vue';

export default {
  name: 'TrendingShow',
  components: {
    Pagination,
  },
  data() {
    return {
      shows: [],
    };
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/trending/tv/day?api_key=${
          import.meta.env.VITE_API_TMDB
        }`
      )
      .then((res) => {
        this.shows = res.data.results;
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
