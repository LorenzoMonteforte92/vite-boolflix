<script>
import { store } from '../store.js';
    export default {
        name: 'TvCards',

        data(){
            return{
                store
            }
        },
        methods: {
            
            }
        }
	

    
</script>

<template>
    <div v-for="singleTvShow in store.resultTvShows" class="card" style="width: calc(100% / 5 - 1rem)">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">{{ singleTvShow.name }}</p>
            <p class="card-text">{{ singleTvShow.original_name }}</p>
            <p class="card-text">{{ singleTvShow.original_language }}</p>
            <p class="card-text">{{ singleTvShow.vote_average }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card{
        height: 100%;
    }
</style>