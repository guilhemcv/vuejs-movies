<template>
  <div class="w-screen mt-20 mb-10 ml-auto mr-auto">
    <h1 class="mt-5 mb-5 text-4xl bold">Top 20 Séries du moment</h1>
    <p v-if="loading">Chargement en cours...</p>
    <div v-else class="flex flex-wrap justify-center">
      <div v-for="show in shows">
        <div class="card-zoom">
          <img
            class="card-zoom-image"
            :src="imageChecker(show.poster_path)"
            alt="{{show.name}}"
          />
          <h2 class="card-zoom-text">{{ show.name }}</h2>
        </div>
        <CardModal :show="show"/>
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
  name: 'MostViewedTvshows',
  data() {
    return {
      loading: false,
      shows: null,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get(
        `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_TMDB}&language=fr-FR`
      )
      .then((res) => {
        this.shows = res.data.results;
      })
      .catch((err) => console.error(err))
      .finally(() => {
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
