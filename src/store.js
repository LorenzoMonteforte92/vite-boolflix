import { reactive } from "vue";

export const store = reactive({
    userSearch: '',
    resultMovies: [],
    resultTvShows: []
});


//stampare la bandiera adeguata per ogni lingua
//se singleMovie.original_language è uguale a en stampa 