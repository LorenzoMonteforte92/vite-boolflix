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
        <div class="text-white fs-2" >FILM</div>
        <div class="row gap-5">
            <div class="ms-movies-col col-12 d-flex flex-wrap overflow-x-auto gap-3">
                <MovieCards></MovieCards>
            </div>
        </div>
        <div class="text-white fs-2 mt-5" >SERIE TV</div>
        <div class="row">
            <div class=" ms-series-col col-12 d-flex flex-wrap overflow-x-auto gap-3">
                <TvCards></TvCards>
            </div>
        </div>
    </div>   
</template>

<style scoped lang="scss">
.container-fluid{
        background-color: #1B1B1B;

    }

.ms-movies-col{
    height: 394px;
    width: 1423px;
}

.ms-series-col{
    height: 345px;
    width: 1423px;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #1b1b1b92; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #333333c7; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #000000c7; 
}
</style>