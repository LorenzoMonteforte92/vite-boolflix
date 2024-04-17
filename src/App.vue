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
      let apiUrl = 'https://api.themoviedb.org/3/search/movie'

      const queryParams = {
        api_key: '62f62e62606571600bd4d756c7d2e25e',
        query: store.userSearch

      }
      
      axios.get(apiUrl, {
      params: queryParams
    })
      .then((response) => {
       store.resultMovies = response.data.results
       console.log(store.resultMovies)

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