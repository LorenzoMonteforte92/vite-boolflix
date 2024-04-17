<script>
import { store } from '../store.js';
import MovieCards from './MovieCards.vue';
import TvCards from './TvCards.vue';

    export default {
        name: 'AppMovieTv',
        components: {
            MovieCards,
            TvCards
        },
        

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
    <div class="container-fluid p-5">
        <div class="row gap-5">
            <div class="col-12 d-flex flex-wrap overflow-x-auto gap-3">
                <MovieCards></MovieCards>
            </div>
            <div class="col-12 d-flex flex-wrap overflow-x-auto gap-3">
                <TvCards></TvCards>
            </div>
        </div>
    </div>   
</template>

<style scoped lang="scss">
.col-12{
    height: 300px;
    width: 1423px;
}
</style>