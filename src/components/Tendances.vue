<template>
  <h1 class="text-2xl">C'est tendance aujourd'hui 🔥</h1>
  <div class="flex justify-center">
    <div v-for="tendance in tendances" class="mx-2 mt-2">
      <img
        :src="imageChecker(tendance.poster_path)"
        alt="{{tendance.name}}"
        width="150"
        class=""
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Tendances',
  data() {
    return {
      isLoading: false,
      tendances: null,
    };
  },
  mounted() {
    this.loading = true;
    axios
      .get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${
          import.meta.env.VITE_API_TMDB
        }`
      )
      .then((res) => {
        this.tendances = res.data.results.splice(0, 5);
        console.log(this.tendances);
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
        return `https://image.tmdb.org/t/p/w200/${image}`;
      }
    },
  },
};
</script>
