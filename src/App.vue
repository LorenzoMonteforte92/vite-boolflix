<script>
import axios from 'axios';
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import AppMovieTv from './components/AppMovieTv.vue';

export default {
  components: {
    AppHeader,
    AppMovieTv,

  },

  data() {
    return {
      store
    };
  },
  
  methods: {
    getSearchedMoviesFromApi(){

      //chiamata API per risultati ricerca film

      let apMoviesiUrl = 'https://api.themoviedb.org/3/search/movie'

      const queryParamsMovies = {
        api_key: '62f62e62606571600bd4d756c7d2e25e',
        query: store.userSearch

      }
      
      axios.get(apMoviesiUrl, {
      params: queryParamsMovies
    })
      .then((response) => {
       store.resultMovies = response.data.results
      })

      //chiamata API per risultati ricerca serie

      let apiTvUrl = 'https://api.themoviedb.org/3/search/tv'

      const queryParamsTv = {
        api_key: '62f62e62606571600bd4d756c7d2e25e',
        query: store.userSearch

      }
      
      axios.get(apiTvUrl, {
      params: queryParamsTv
    })
      .then((response) => {
       store.resultTvShows = response.data.results
      })
      
    }
  },

  mounted() {
   
  }
}
</script>

<template>
  <AppHeader @searchMovieTv="getSearchedMoviesFromApi"></AppHeader>
  <main>
    <AppMovieTv></AppMovieTv>
  </main>
</template>

<style>

</style>