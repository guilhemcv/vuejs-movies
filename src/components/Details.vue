<template>
 <div
      class="flex items-center justify-center px-2 py-2 mx-auto mt-10 font-semibold text-white bg-red-600 border border-red-600 rounded w-72 hover:bg-red-500 hover:text-white hover:border-transparent"
    >
      <router-link v-if="type === 'serie'" :to="{ name: 'series' }">
        Retour à l'accueil des séries
      </router-link>
    </div>
    <div
      class="flex items-center justify-center px-2 py-2 mx-auto mt-10 font-semibold text-white bg-red-600 border border-red-600 rounded w-72 hover:bg-red-500 hover:text-white hover:border-transparent"
    >
      <router-link v-if="type === 'film'" :to="{ name: 'films' }">
        Retour à l'accueil des films
      </router-link>
    </div>
  <div v-if="oneMovie">
    <h2 class="mt-10 text-3xl text-center underline lg:mt-0 lg:text-4xl">
      {{ oneMovie.title }}
    </h2>
    <div
      class="flex flex-col items-center justify-around w-full mt-20 lg:flex-row"
    >
      <img
        :src="imageChecker(oneMovie.backdrop_path)"
        alt="{{oneMovie.title}}"
        width="500"
      />
      <div class="flex flex-col justify-between w-10/12 lg:w-5/12">
        <h2 class="mt-10 mb-2 text-xl underline text lg:mt-0">Synopsis :</h2>
        <p class="mx-auto mb-4 text-justify">
          {{ oneMovie.overview }}
        </p>
        <div class="flex flex-col justify-between">
          <p>
            <span class="font-bold">Date de sortie :</span>

            {{ oneMovie.release_date.split('-').reverse().join('/') }}
          </p>
          <p>
            <span class="font-bold">Durée :</span>

            {{ oneMovie.runtime }} minutes
          </p>
          <p v-if="oneMovie.budget !== 0">
            <span class="font-bold">Budget :</span>
            {{ oneMovie.budget.toLocaleString() }} $
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-start justify-around w-10/12 mx-auto lg:my-10 lg:w-7/12 lg:items-center h-72 lg:h-auto lg:flex-row"
    >
      <h1 class="font-bold">Catégories :</h1>
      <div v-for="genre in genres">
        <p
          class="flex items-center justify-center w-auto h-12 px-5 bg-gray-700 rounded"
        >
          {{ genre.name }}
        </p>
      </div>
    </div>
    <div class="w-9/12 mx-auto mt-20 border border-white"></div>
    <h2
      class="my-10 text-2xl font-bold text-center underline lg:my-20 lg:text-3xl"
    >
      Casting du film
    </h2>
    <h3 class="my-10 text-xl font-bold text-center underline lg:text-2xl">
      Producteurs
    </h3>
    <div class="flex flex-wrap justify-center">
      <div v-for="producer in producers">
        <div class="card-zoom-cast">
          <img
            width=""
            :src="imageChecker(producer.profile_path)"
            alt="{{producer.name}}"
            class="card-zoom-image-cast"
          />

          <p class="card-zoom-text-cast">{{ producer.name }}</p>
        </div>
      </div>
    </div>
    <h3 class="my-10 text-xl font-bold text-center underline lg:text-2xl">
      Acteurs
    </h3>
    <div class="flex flex-wrap justify-center">
      <div v-for="actor in cast">
        <div class="card-zoom-cast">
          <img
            width=""
            :src="imageChecker(actor.profile_path)"
            alt="{{actor.name}}"
            class="card-zoom-image-cast"
          />
          <p class="card-zoom-text-cast">{{ actor.name }}</p>
        </div>
      </div>
    </div>
    <div class="w-9/12 mx-auto mt-20 border border-white"></div>
    <h2
      class="my-10 text-2xl font-bold text-center underline lg:my-20 lg:text-3xl"
    >
      Vidéos
    </h2>
    <div class="flex flex-wrap">
      <div
        class="justify-around w-10/12 mx-auto mb-10 lg:w-5/12"
        v-if="videos.length > 0"
        v-for="video in videos"
      >
        <p>{{ video.name }}</p>
        <LiteYouTubeEmbed :id="video.key" :title="video.name" />
      </div>
    </div>
    <div class="w-9/12 mx-auto mt-20 border border-white"></div>

    <h2
      class="my-10 text-2xl font-bold text-center underline lg:my-20 lg:text-3xl"
    >
      Films Similaires
    </h2>
    <div class="flex flex-wrap justify-around w-11/12 mx-auto mb-20">
      <div v-for="sim in similar">
        <div class="card-zoom-cast">
          <img
            width=""
            :src="imageChecker(sim.poster_path)"
            alt="{{sim.title}}"
            class="card-zoom-image-cast"
          />
          <p class="card-zoom-text-cast">{{ sim.title }}</p>
        </div>
      </div>
    </div>
  </div>
  <div v-if="oneShow">
    <h2 class="mt-10 text-3xl text-center underline lg:mt-0 lg:text-4xl">
      {{ oneShow.name }}
    </h2>
    <div
      class="flex flex-col items-center justify-around w-full mt-20 lg:flex-row"
    >
      <img
        :src="imageChecker(oneShow.backdrop_path)"
        alt="{{oneShow.name}}"
        width="500"
      />
      <div class="flex flex-col justify-between w-10/12 lg:w-5/12">
        <h2 class="mt-10 mb-2 text-xl underline text lg:mt-0">Synopsis :</h2>
        <p class="mx-auto mb-4 text-justify">
          {{ oneShow.overview }}
        </p>
        <div class="flex flex-col justify-between">
          <p v-if="oneShow">
            <span class="font-bold">date de première sortie :</span>

            {{ oneShow.first_air_date.split('-').reverse().join('/') }}
          </p>

          <p v-if="oneShow">
            <span class="font-bold">nombre de saisons :</span>
            {{ oneShow.number_of_seasons }}
          </p>
          <p class="mb-10" v-if="oneShow">
            <span class="font-bold">nombre d'épisodes :</span>
            {{ oneShow.number_of_episodes }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col items-start justify-around w-10/12 mx-auto lg:my-10 lg:w-7/12 lg:items-center h-72 lg:h-auto lg:flex-row"
    >
      <h1 class="font-bold">Catégories :</h1>
      <div v-for="genre in genres">
        <p
          class="flex items-center justify-center w-auto h-12 px-5 bg-gray-700 rounded"
        >
          {{ genre.name }}
        </p>
      </div>
    </div>
    <div class="w-9/12 mx-auto mt-20 border border-white"></div>
    <h2
      class="my-10 text-2xl font-bold text-center underline lg:my-20 lg:text-3xl"
    >
      Casting de la série :
    </h2>
    <h3 class="my-10 text-xl font-bold text-center underline lg:text-2xl">
      Producteurs
    </h3>

    <div class="flex flex-wrap justify-center">
      <div v-for="producer in oneShow.created_by">
        <div class="card-zoom-cast">
          <img
            width=""
            :src="imageChecker(producer.profile_path)"
            alt="{{producer.name}}"
            class="card-zoom-image-cast"
          />

          <p class="card-zoom-text-cast">{{ producer.name }}</p>
        </div>
      </div>
    </div>
    <h3 class="my-10 text-xl font-bold text-center underline lg:text-2xl">
      Acteurs
    </h3>

    <div class="flex flex-wrap justify-center">
      <div v-for="actor in cast">
        <div class="card-zoom-cast">
          <img
            width=""
            :src="imageChecker(actor.profile_path)"
            alt="{{actor.name}}"
            class="card-zoom-image-cast"
          />

          <p class="card-zoom-text-cast">{{ actor.name }}</p>
        </div>
      </div>
    </div>
    <div class="w-9/12 mx-auto mt-20 border border-white"></div>
    <h2
      class="my-10 text-2xl font-bold text-center underline lg:my-20 lg:text-3xl"
    >
      Vidéos
    </h2>
    <div class="flex flex-wrap">
      <div
        class="justify-around w-10/12 mx-auto mb-10 lg:w-5/12"
        v-if="videos.length > 0"
        v-for="video in videos"
      >
        <p>{{ video.name }}</p>
        <LiteYouTubeEmbed :id="video.key" :title="video.name" />
      </div>
    </div>
    <div class="w-9/12 mx-auto mt-20 border border-white"></div>

    <h2
      class="my-10 text-2xl font-bold text-center underline lg:my-20 lg:text-3xl"
    >
      Séries Similaires
    </h2>
    <div class="flex flex-wrap justify-around w-11/12 mx-auto mb-20">
      <div v-for="sim in similar">
        <div class="card-zoom-cast">
          <img
            width=""
            :src="imageChecker(sim.poster_path)"
            alt="{{sim.title}}"
            class="card-zoom-image-cast"
          />
          <p class="card-zoom-text-cast">{{ sim.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import LiteYouTubeEmbed from 'vue-lite-youtube-embed';
import 'vue-lite-youtube-embed/dist/style.css';

export default {
  name: 'CardModal',
  components: {
    LiteYouTubeEmbed,
  },
  props: {
    type: String,
    id: Number,
  },
  data() {
    return {
      key: 0,
      isOpen: false,
      oneMovie: null,
      oneShow: null,
      oneTrailer: null,
      genres: [],
      cast: [],
      videos: [],
      similar: [],
      producers: [],
      videoId:
        'https://www.youtube.com/watch?v=_daTfgc4u3k&ab_channel=WorkMusicLab',
    };
  },

  mounted() {
    console.log(this.type);
    axios
      .get(
        `https://api.themoviedb.org/3/${
          this.type === 'film' ? 'movie' : 'tv'
        }/${this.id}?api_key=${
          import.meta.env.VITE_API_TMDB
        }&language=fr-FR&append_to_response=videos,credits,similar`
      )
      .then((res) => {
        this.type === 'film'
          ? (this.oneMovie = res.data)
          : (this.oneShow = res.data);
        this.videos = res.data.videos.results;
        this.genres = res.data.genres;
        this.cast = res.data.credits.cast.splice(0, 20);
        this.producers = res.data.credits.crew.filter(
          (crew) => crew.job === 'Producer'
        );
        this.similar = res.data.similar.results.splice(0, 5);

        console.log(this.oneMovie);
      });
  },
  methods: {
    imageChecker(image) {
      if (image === null || image === undefined || image === '') {
        return 'https://upload.wikimedia.org/wikipedia/commons/6/6c/No_image_3x4.svg';
      } else {
        return `https://image.tmdb.org/t/p/w500/${image}`;
      }
    },
    newKey() {
      this.key = this.key + 1;
    },
  },
};
</script>
