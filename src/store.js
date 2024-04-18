import { reactive } from "vue";

export const store = reactive({
    userSearch: '',
    resultMovies: [],
    resultTvShows: [],
});


//dividere il numero per 2
//renderlo un integer unico arrotondato per eccesso
//associare ogni numero a 