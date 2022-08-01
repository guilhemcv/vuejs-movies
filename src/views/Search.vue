<template>
  <div
    class="flex flex-col items-center justify-center h-full -mb-20 pb-72"
    v-if="searched === false"
  >
    <h3 class="mb-5 text-lg md:text-xl">Rechercher un film ou une série :</h3>
    <input
      class="h-10 p-2 text-center text-black rounded-sm md:w-96"
      type="text"
      v-model="search"
      placeholder="Stranger Things"
    />
    <div class="flex justify-around mt-3 w-72">
      <div>
        <input
          id="serie"
          name="type"
          value="serie"
          type="radio"
          v-model="picked"
        />
        <label for="serie" class="ml-3">Série</label>
      </div>
      <div>
        <input
          id="movie"
          name="type"
          value="movie"
          type="radio"
          v-model="picked"
        />
        <label for="movie" class="ml-3">Film</label>
      </div>
    </div>
    <button
      @click="updateList()"
      class="w-40 h-10 mt-3 text-white bg-red-500 rounded-sm"
    >
      search
    </button>
  </div>
  <div class="flex justify-center mt-5">
    <button
      @click="searched = false"
      class="w-40 h-10 mt-3 text-white border-2 border-white rounded-sm hover:border-none hover:bg-red-500"
    >
      Retour
    </button>
  </div>
  <div v-if="searched">
    <div v-if="movieCheck" :key="newKey">
      <h2 v-if="loading" class="my-10 text-3xl text-center">
        Films contenant <span class="italic">"{{ search }}"</span>
      </h2>
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
    </div>
  </div>
  <div v-if="searched">
    <div v-if="showCheck" :key="newKey">
      <h2 v-if="loading" class="my-10 text-3xl text-center underline">
        Séries contenant <span class="italic">"{{ search }}"</span>
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
      picked: '',
      loading: false,
      newKey: 0,
      searched: false,
      movieCheck: false,
      showCheck: false,
    };
  },
  methods: {
    getMovies() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${
            import.meta.env.VITE_API_TMDB
          }&language=fr-FR&query=${this.search}`
        )
        .then((res) => {
          this.movies = res.data.results;
          this.movieCheck = true;
          this.newKey = this.newKey + 1;
          this.loading = true;
          this.searched = true;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    getShows() {
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=${
            import.meta.env.VITE_API_TMDB
          }&language=fr-FR&query=${this.search}`
        )
        .then((res) => {
          this.shows = res.data.results;
          this.showCheck = true;
          this.newKey = this.newKey + 1;
          this.loading = true;
          this.searched = true;
        })
        .catch((err) => {
          console.error(err);
        });
    },
    updateList() {
      this.picked === 'movie' ? this.getMovies() : this.getShows();
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
