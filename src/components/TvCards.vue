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
    <div v-for="singleTvShow in store.resultTvShows"  class="card" style="width: calc(100% / 5 - 1rem)">
        <div class="ms-card-img" >
            <img v-if="singleTvShow.backdrop_path != null" :src="`https://image.tmdb.org/t/p/w500${singleTvShow.backdrop_path}`" class="card-img-top" alt="...">
            <img v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3A0wuWXMSjfCUPDgeVF63_08mB46ulS8Mtf-jxo3GBw&s" alt="">
        </div>
        <div class="card-body d-flex flex-column justify-content-between mt-4">
            <div>
                <p class="card-text">{{ singleTvShow.name }}</p>
                <p class="card-text">{{ singleTvShow.original_name }}</p>
            </div>
            <div>
                <div v-if="singleTvShow.original_language === 'it'" class="language-flag m-0" ><img src="../assets/img/icons8-italy.png" alt=""></div>
                <div v-else-if="singleTvShow.original_language === 'fr'" class="language-flag m-0" ><img src="../assets/img/icons8-france.png" alt=""></div>
                <div v-else-if="singleTvShow.original_language === 'es'" class="language-flag m-0" ><img src="../assets/img/icons8-spain.png" alt=""></div>
                <div v-else-if="singleTvShow.original_language === 'en'" class="language-flag m-0" ><img src="../assets/img/icons8-great-britain.png" alt=""></div>
                <div v-else-if="singleTvShow.original_language === 'pt'" class="language-flag m-0" ><img src="../assets/img/icons8-portugal.png" alt=""></div>
                <div v-else-if="singleTvShow.original_language === 'ja'" class="language-flag m-0" ><img src="../assets/img/icons8-japan.png" alt=""></div>
                <div v-else class="card-text">{{ singleTvShow.original_language }}</div>
                <div v-if="Math.round(singleTvShow.vote_average / 2) == 1" class="card-text ps-1 pt-1"><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div v-else-if="Math.round(singleTvShow.vote_average / 2) == 2" class="card-text ps-1 pt-1"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div v-else-if="Math.round(singleTvShow.vote_average / 2) == 3" class="card-text ps-1 pt-1"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div v-else-if="Math.round(singleTvShow.vote_average / 2) == 4" class="card-text ps-1 pt-1"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div v-else-if="Math.round(singleTvShow.vote_average / 2) == 5" class="card-text ps-1 pt-1"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <div v-else class="card-text ps-1 pt-1"><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .card{

        img{
            width: 100%;
            object-fit: contain;
            
        }
    }
    .language-flag{
       border-radius: 50%;

       img{
        width: 10%;
       }
    }

    .ms-card-img{
        height: 45%
    }

    .fa-star{
        color: gold;
    }
</style>
