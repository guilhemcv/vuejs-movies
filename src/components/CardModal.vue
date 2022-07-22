<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <button
        @click="isOpen = true"
        class="px-6 py-2 mb-10 text-white bg-gray-500 rounded shadow"
        type="button"
      >
        Plus de détails
      </button>

      <div
        v-show="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center overflow-scroll bg-gray-700 pt-[600px] bg-opacity-80"
      >
        <div
          class="w-auto p-6 bg-gray-800 rounded-md shadow-xl md:w-[800px] my-14"
        >
          <div class="flex justify-between">
            <h3 v-if="oneMovie" class="text-2xl text-center">
              {{ oneMovie.title }}
            </h3>
            <h3 v-if="oneShow" class="text-2xl">{{ oneShow.name }}</h3>

            <svg
              @click="isOpen = false"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-gray-300 cursor-pointer tea"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
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
            <p v-if="oneMovie" class="mx-auto mb-4 text-justify">
              {{ oneMovie.overview }}
            </p>
            <p v-if="oneShow" class="mx-auto mt-5 mb-4 text-justify">
              {{ oneShow.overview }}
            </p>

            <p class="my-5" v-if="oneMovie">
              Date de sortie :
              {{ oneMovie.release_date.split('-').reverse().join('/') }}
            </p>
            <p class="my-3" v-if="oneMovie">
              Durée : {{ oneMovie.runtime }} minutes
            </p>
            <p class="my-3" v-if="oneMovie">Budget : {{ oneMovie.budget }} $</p>
            <p v-if="oneShow">
              date de première sortie :
              {{ oneShow.first_air_date.split('-').reverse().join('/') }}
            </p>

            <p v-if="oneShow">
              nombre de saisons : {{ oneShow.number_of_seasons }}
            </p>
            <p class="mb-10" v-if="oneShow">
              nombre d'épisodes : {{ oneShow.number_of_episodes }}
            </p>
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
            <button
              @click="isOpen = false"
              class="px-6 py-2 mx-auto mt-10 text-center border border-gray-300 rounded text-grey-300 w-96"
            >
              Retour
            </button>
          </div>
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
    movie: Object,
    show: Object,
    movieId: Number,
  },
  data() {
    return {
      isOpen: false,
      oneMovie: null,
      oneShow: null,
      oneTrailer: null,
      videoId:
        'https://www.youtube.com/watch?v=_daTfgc4u3k&ab_channel=WorkMusicLab',
    };
  },

  mounted(){
    axios
      .get(
        `https://api.themoviedb.org/3/${this.movie ? 'movie' : 'tv'}/${
          this.movie ? this.movieId : this.show.id
        }?api_key=${import.meta.env.VITE_API_TMDB}&language=fr-FR`
      )
      .then((res) => {
        this.movie ? (this.oneMovie = res.data) : (this.oneShow = res.data);
      })
      .then(
        axios
          .get(
            `https://api.themoviedb.org/3/${this.movie ? 'movie' : 'tv'}/${
              this.movie ? this.movie.id : this.show.id
            }/videos?api_key=${import.meta.env.VITE_API_TMDB}&language=fr-FR`
          )
          .then((res) => {
            this.oneTrailer = res.data.results.filter(
              (trailer) => trailer.type === 'Trailer'
            );
          })
          .catch((err) => {
            console.log(err);
          })
      )
      .catch((err) => console.error(err));
  },
  methods: {
    imageChecker(image) {
      if (image === null) {
        return 'https://via.placeholder.com/500x750';
      } else {
        return `https://image.tmdb.org/t/p/w500/${image}`;
      }
    },
  },
};
</script>
