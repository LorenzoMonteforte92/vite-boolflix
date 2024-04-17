<script>
import MovieCards from './MovieCards.vue';
    export default {
        name: 'AppMovieTv',
        components: {
            MovieCards,
        },
        

        data(){
            return{
                
            }
        },
        methods: {
            
            }
        }
	

    
</script>

<template>
    <div class="container-fluid p-5">
        <div class="row">
            <div class="col-12">
                <MovieCards></MovieCards>
            </div>
        </div>
    </div>   
</template>

<style scoped lang="scss">

</style>