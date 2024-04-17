<script>
import { store } from '../store.js';
import MovieCards from './MovieCards.vue';
    export default {
        name: 'AppMovieTv',
        components: {
            MovieCards,
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
        <div class="row">
            <div class="col-12 d-flex flex-wrap overflow-x-auto gap-3">
                <MovieCards></MovieCards>
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