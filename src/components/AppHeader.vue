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
    <div class="row justify-content-between py-3">
        <div class="col-3 text-center">
            <div>header logo</div>
        </div>
        <div class="col-3 d-flex ">
            <div><input v-model="store.userSearch" type="text" placeholder="Cerca Film o Serie TV" ></div>
            <button @click="$emit('searchMovieTv')" >Cerca</button>
        </div>
    </div>
</div>
</template>

<style scoped lang="scss">

</style>
