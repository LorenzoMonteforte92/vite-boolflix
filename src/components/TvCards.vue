<script>
import { store } from '../store.js';
    export default {
        name: 'TvCards',

        data(){
            return{
                store,
                activeContact: '',
                supportedLanguages: [
                    'it',
                    'en',
                    'fr',
                    'es',
                    'pt',
                    'ja'
                ]
            }
        },
        methods: {
            overInfoAppear(index){
                this.activeContact = index
            },
            
            getFlagUrl(index){
                let flagName = store.resultMovies[index].original_language + '.png';
                return new URL(`../assets/img/${flagName}`, import.meta.url).href;
                
            }
        }
    }
	

    
</script>

<template>
    <div v-on:mouseover="overInfoAppear(index)" v-on:mouseleave="activeContact = ''" v-for="singleTvShow, index in store.resultTvShows" class="card position-relative" style="width: calc(100% / 3 - 1rem)">
        <div class="ms-card-img" >
            <img v-if="singleTvShow.backdrop_path != null" :src="`https://image.tmdb.org/t/p/w500${singleTvShow.backdrop_path}`" class="card-img-top" alt="...">
            <img v-else  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3A0wuWXMSjfCUPDgeVF63_08mB46ulS8Mtf-jxo3GBw&s" class="card-img-top" alt="">
        </div>
        <div v-if="activeContact === index" class="card-body card-img-hover d-flex flex-column justify-content-between rounded p-1">
            <div class="col-7 pb-2" >
                <p class="card-text">{{ singleTvShow.name }}</p>
                <p class="card-text">{{ singleTvShow.original_name  }}</p>
            </div>
            <div class="col overflow-y-auto">{{ singleTvShow.overview }}</div>
            <div class="col-5" >
            <!-- bandiere -->
                <div v-if="supportedLanguages.includes(singleTvShow.original_language)" class="language-flag m-0" ><img :src="getFlagUrl(index)" alt=""></div>
                <div v-else class="card-text">{{ singleTvShow.original_language }}</div>
            <!-- /bandiere -->
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
        height: 73%;

        img{
            width: 100%;
            object-fit: contain;
            
        }
    }
    .language-flag{
       border-radius: 50%;

       img{
        width: 12%;
       }
    }

    .card-img-top{
        height: 100%;
    }

    .ms-card-img{
        height: 100%;
    }
    

    .card-img-hover{
    position: absolute;
    top: 0%;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background-color: #00000092;
    color: white;
    transition: opacity 0.4s;
}

.fa-star{
        color: gold;
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
