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
            <div v-if="singleTvShow.original_language === 'it'" class="language-flag" ><img src="../assets/img/icons8-italy.png" alt=""></div>
            <div v-else-if="singleTvShow.original_language === 'fr'" class="language-flag" ><img src="../assets/img/icons8-france.png" alt=""></div>
            <div v-else-if="singleTvShow.original_language === 'es'" class="language-flag" ><img src="../assets/img/icons8-spain.png" alt=""></div>
            <div v-else-if="singleTvShow.original_language === 'en'" class="language-flag" ><img src="../assets/img/icons8-great-britain.png" alt=""></div>
            <div v-else-if="singleTvShow.original_language === 'pt'" class="language-flag" ><img src="../assets/img/icons8-portugal.png" alt=""></div>
            <div v-else-if="singleTvShow.original_language === 'ja'" class="language-flag" ><img src="../assets/img/icons8-japan.png" alt=""></div>
            <p v-else class="card-text">{{ singleTvShow.original_language }}</p>
            <p class="card-text">{{ singleTvShow.vote_average }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card{
        height: 100%;
    }

    .language-flag{
       border-radius: 50%;

       img{
        width: 10%;
       }
    }
</style>