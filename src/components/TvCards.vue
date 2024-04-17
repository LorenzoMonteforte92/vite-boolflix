<script>
    export default {
        name: 'TvCards',

        data(){
            return{
                
            }
        },
        methods: {
            
            }
        }
	

    
</script>

<template>
    <div v-for="singleMovie in store.resultMovies" class="card" style="width: calc(100% / 5 - 1rem)">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <p class="card-text">{{ singleMovie.title }}</p>
            <p class="card-text">{{ singleMovie.original_title }}</p>
            <p class="card-text">{{ singleMovie.original_language }}</p>
            <p class="card-text">{{ singleMovie.vote_average }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card{
        height: 100%;
    }
</style>