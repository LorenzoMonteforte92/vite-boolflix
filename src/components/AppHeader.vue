<script>
import { store } from '../store';

    export default {
        name: 'AppHeader',

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
<div class="container-fluid">
    <div class="row justify-content-between py-3 text-white">
        <div class="col-3 text-center">
            <div class="text-danger fs-2" >BOOLFLIX</div>
        </div>
        <div class="col-3 d-flex align-items-center">
            <button @click="$emit('searchMovieTv')" class="ms-btn fs-5 ms-2" ><i class="fa-solid fa-magnifying-glass"></i></button>
            <div class="ms-3" ><input class=" rounded"  v-model="store.userSearch" type="text" placeholder="Cerca Film o Serie TV" ></div>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">
    .container-fluid{
        background-color: #121212;

    }

    .ms-btn{
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: white;

    }

</style>
