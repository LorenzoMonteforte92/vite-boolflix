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
   
  },
  mounted() {
   
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <main>
    <AppMovieTv></AppMovieTv>
  </main>
</template>

<style>

</style>