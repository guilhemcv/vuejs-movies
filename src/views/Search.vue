<template class="h-screen">
  <div class="flex flex-col items-center justify-center h-screen -translate-y-40" v-if="searched === false">
    <h3 class="mb-5 text-xl">Rechercher un film ou une série:</h3>
    <input
      class="h-10 p-2 text-center text-black rounded-sm w-96"
      type="text"
      v-model="search"
      placeholder="Stranger Things"
    />
    <button
      @click="updateList()"
      class="w-40 h-10 mt-3 text-white bg-red-500 rounded-sm"
    >
      search
    </button>
  </div>
  <button @click="searched = false">Retour</button>
  <div v-if="searched">
    <h2 v-if="loading" class="my-10 text-3xl text-center underline">
      Résultats Films
    </h2>
    <div>
      <div class="flex flex-wrap justify-center">
        <div v-for="movie in movies">
          <div class="card-zoom">
            <img
              v-if="movie.poster_path !== null"
              class="card-zoom-image"
              :src="imageChecker(movie.poster_path)"
              alt="{{movie.title}}"
            />
            <img
              v-if="movie.poster_path === null"
              class="card-zoom-image"
              src="../assets/images/noimage.png"
              alt="aucune image"
            />
            <h2 class="card-zoom-text">{{ movie.title }}</h2>
          </div>
          <CardModal
            v-if="movie"
            :movie="movie"
            :movieId="movie.id"
            :key="newKey"
          />
        </div>
      </div>
      <div>
        <h2 v-if="loading" class="my-10 text-3xl text-center underline">
          Résultats Séries
        </h2>

        <div class="flex flex-wrap justify-center">
          <div v-for="show in shows">
            <div class="card-zoom">
              <img
                v-if="show.poster_path !== null"
                class="card-zoom-image"
                :src="imageChecker(show.poster_path)"
                alt="{{show.name}}"
              />
              <img
                v-if="show.poster_path === null"
                class="card-zoom-image"
                src="../assets/images/noimage.png"
                alt="aucune image"
              />
              <h2 class="card-zoom-text">{{ show.name }}</h2>
            </div>
            <CardModal :show="show" :key="newKey" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CardModal from '../components/CardModal.vue';
export default {
  components: {
    CardModal,
  },
  data() {
    return {
      search: '',
      movies: [],
      shows: [],
      loading: false,
      newKey: 0,
      searched: false,
    };
  },
  methods: {
    updateList() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_API_TMDB
          }&language=fr-FR&query=${this.search}`
        )
        .then((res) => {
          this.movies = res.data.results;
          this.newKey = this.newKey + 1;
          this.loading = true;
          this.searched = true;
        })
        .then(
          axios
            .get(
              `https://api.themoviedb.org/3/search/tv?api_key=${
                import.meta.env.VITE_API_TMDB
              }&language=fr-FR&query=${this.search}`
            )
            .then((res) => {
              console.log(res.data.results);
              this.newKey = this.newKey + 1;
              this.shows = res.data.results;
            })
        )
        .catch((err) => console.error(err));
    },
    imageChecker(image) {
      if (image === null) {
        return '';
      } else {
        return `https://image.tmdb.org/t/p/w300/${image}`;
      }
    },
   
  },
};
</script>
