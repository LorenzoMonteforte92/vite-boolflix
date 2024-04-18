<script>
import { store } from '../store.js';
    export default {
        name: 'MovieCards',

        data(){
            return{
                store,
                activeContact: ''
                
            }
        },
        methods: {
            overInfoAppear(index){
                this.activeContact = index
            }
            }
        }
	

    
</script>

<template>
    <div v-on:mouseover="overInfoAppear(index)" v-on:mouseleave="activeContact = ''" v-for="singleMovie, index in store.resultMovies" class="card position-relative" style="width: calc(100% / 3 - 1rem)">
        <div class="ms-card-img" >
            <img v-if="singleMovie.backdrop_path != null" :src="`https://image.tmdb.org/t/p/w500${singleMovie.backdrop_path}`" class="card-img-top" alt="...">
            <img v-else src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3A0wuWXMSjfCUPDgeVF63_08mB46ulS8Mtf-jxo3GBw&s" class="card-img-top" alt="">
        </div>
        <div v-if="activeContact === index" class="card-img-hover d-flex flex-column justify-content-between rounded p-1">
            <div class="col-7 pb-2" >
                <p class="card-text">{{ singleMovie.title }}</p>
                <p class="card-text">{{ singleMovie.original_title }}</p>
            </div>
            <div class="col overflow-y-auto">{{ singleMovie.overview }}</div>
            <div class="col-5" >
                <div v-if="singleMovie.original_language === 'it'" class="language-flag m-0" ><img src="../assets/img/icons8-italy.png" alt=""></div>
                <div v-else-if="singleMovie.original_language === 'fr'" class="language-flag m-0" ><img src="../assets/img/icons8-france.png" alt=""></div>
                <div v-else-if="singleMovie.original_language === 'es'" class="language-flag m-0" ><img src="../assets/img/icons8-spain.png" alt=""></div>
                <div v-else-if="singleMovie.original_language === 'en'" class="language-flag m-0" ><img src="../assets/img/icons8-great-britain.png" alt=""></div>
                <div v-else-if="singleMovie.original_language === 'pt'" class="language-flag m-0" ><img src="../assets/img/icons8-portugal.png" alt=""></div>
                <div v-else-if="singleMovie.original_language === 'ja'" class="language-flag m-0" ><img src="../assets/img/icons8-japan.png" alt=""></div>
                <div v-else class="card-text">{{ singleMovie.original_language }}</div>
                <div v-if="Math.round(singleMovie.vote_average / 2) == 1" class="card-text ps-1 pt-1"><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div v-else-if="Math.round(singleMovie.vote_average / 2) == 2" class="card-text ps-1 pt-1"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div v-else-if="Math.round(singleMovie.vote_average / 2) == 3" class="card-text ps-1 pt-1"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div v-else-if="Math.round(singleMovie.vote_average / 2) == 4" class="card-text ps-1 pt-1"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i></div>
                <div v-else-if="Math.round(singleMovie.vote_average / 2) == 5" class="card-text ps-1 pt-1"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
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
        width: 12%;
       }
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


.card-img-top{
        height: 100%;
    }

    .ms-card-img{
        height: 100%;
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
