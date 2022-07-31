<template>
  <router-link v-if="type === 'serie'" :to="{ name: 'series' }">
    Retour à l'accueil des séries
  </router-link>
    <router-link v-if="type === 'film'" :to="{ name: 'series' }">
    Retour à l'accueil des films
  </router-link>
  <div>
    <div class="flex justify-between">
      <h3 v-if="oneMovie" class="text-2xl text-center">
        {{ oneMovie.title }}
      </h3>
      <h3 v-if="oneShow" class="text-2xl">{{ oneShow.name }}</h3>
    </div>
    <div class="flex flex-col mt-4">
      <img
        v-if="oneMovie"
        :src="imageChecker(oneMovie.backdrop_path)"
        alt="{{oneMovie.title}}"
        width="500"
        class="mx-auto my-10"
      />
      <img
        v-if="oneShow"
        :src="imageChecker(oneShow.backdrop_path)"
        alt="{{oneShow.name}}"
        width="500"
        class="mx-auto my-10"
      />
      <h2 class="mt-5 mb-2 text-xl underline">Synopsis :</h2>
      <p v-if="oneMovie" class="mx-auto mb-4 md:text-justify">
        {{ oneMovie.overview }}
      </p>
      <p v-if="oneShow" class="mx-auto mt-5 mb-4 md:text-justify">
        {{ oneShow.overview }}
      </p>

      <p class="my-5" v-if="oneMovie">
        Date de sortie :
        {{ oneMovie.release_date.split('-').reverse().join('/') }}
      </p>
      <p class="my-3" v-if="oneMovie">Durée : {{ oneMovie.runtime }} minutes</p>
      <p class="my-3" v-if="oneMovie && oneMovie.budget !== 0">
        Budget : {{ oneMovie.budget.toLocaleString() }} $
      </p>
      <p v-if="oneShow">
        date de première sortie :
       <!--  {{ oneShow.first_air_date.split('-').reverse().join('/') }} -->
      </p>

      <p v-if="oneShow">nombre de saisons : {{ oneShow.number_of_seasons }}</p>
      <p class="mb-10" v-if="oneShow">
        nombre d'épisodes : {{ oneShow.number_of_episodes }}
      </p>
      <h4 class="mb-5">Casting :</h4>
      <div class="flex flex-wrap justify-around">
        <div v-for="actor in cast">
          <div class="flex flex-col items-center justify-center w-28">
            <a :href="imageChecker(actor.profile_path)" target="_blank">
              <img
                width="50"
                :src="imageChecker(actor.profile_path)"
                alt="{{actor.name}}"
              />
            </a>
            <p class="mb-10 text-sm text-center">{{ actor.name }}</p>
          </div>
        </div>
      </div>
      <LiteYouTubeEmbed
        v-if="oneTrailer && oneMovie"
        :id="oneTrailer.length > 0 ? oneTrailer[0].key : ''"
        :title="oneTrailer.length > 0 ? oneTrailer[0].title : ''"
      />
      <LiteYouTubeEmbed
        v-if="oneTrailer && oneShow"
        :id="oneTrailer.length > 0 ? oneTrailer[0].key : ''"
        :title="oneTrailer.length > 0 ? oneTrailer[0].name : ''"
      />
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
      isOpen: false,
      oneMovie: null,
      oneShow: null,
      oneTrailer: null,
      cast: [],
      videoId:
        'https://www.youtube.com/watch?v=_daTfgc4u3k&ab_channel=WorkMusicLab',
    };
  },

  mounted() {
    console.log(this.type)
    axios
      .get(
        `https://api.themoviedb.org/3/${
          this.type === 'film' ? 'movie' : 'tv'
        }/${this.id}?api_key=${
          import.meta.env.VITE_API_TMDB
        }&language=fr-FR&append_to_response=videos,credits`
      )
      .then((res) => {
        this.movie === 'film'
          ? (this.oneMovie = res.data)
          : (this.oneShow = res.data);
        this.oneTrailer = res.data.videos.results.filter(
          (trailer) => trailer.type === 'Trailer'
        );
        this.cast = res.data.credits.cast.splice(0, 12);
      });
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
